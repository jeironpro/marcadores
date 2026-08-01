#!/usr/bin/env python3
import base64
import os
import re
import sys
from urllib.parse import unquote, urljoin, urlparse

import requests

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(SCRIPT_DIR, "js", "script.js")
ICON_DIR = os.path.join(SCRIPT_DIR, "icon", "enlaces")
FALLBACK_API = "https://api.iconify.design"
DEFAULT_EXT = "png"
TIMEOUT = 10
GOOGLE_FAVICON = "https://www.google.com/s2/favicons?domain={domain}&sz=64"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}

EXTENSIONES = ["svg", "jpg", "jpeg", "ico", "gif", "png", "webp"]

os.makedirs(ICON_DIR, exist_ok=True)


def limpiar_nombre(texto):
    return texto.lower().replace(" ", "_")


EXCEPCIONES_DOMINIO = ("github.io",)


def es_dominio_excepcion(domain):
    domain = (domain or "").lower().rstrip("/")
    return any(domain == exc or domain.endswith("." + exc) for exc in EXCEPCIONES_DOMINIO)


def clave_dominio(domain):
    return domain.lower().replace(".", "_").replace(":", "_")


def extraer_enlaces_desde_js(ruta_archivo):
    with open(ruta_archivo, "r", encoding="utf-8") as f:
        contenido = f.read()

    enlaces = []
    for bloque in re.finditer(
        r'\{\s*nombre\s*:\s*"([^"]+)"\s*,\s*descripcion\s*:[^}]*?url\s*:\s*"([^"]+)"',
        contenido,
        re.DOTALL,
    ):
        nombre = bloque.group(1)
        url = bloque.group(2)
        enlaces.append((nombre, url))

    return enlaces


def dominio_de_url(url):
    try:
        return urlparse(url).hostname or "localhost"
    except Exception:
        return url


def icono_ya_existe(clave):
    for ext in EXTENSIONES:
        if os.path.exists(os.path.join(ICON_DIR, f"{clave}.{ext}")):
            return True
    return False


def obtener_html(url, timeout=TIMEOUT):
    try:
        resp = requests.get(url, headers=HEADERS, timeout=timeout, allow_redirects=True)
        if resp.status_code == 200 and "text/html" in resp.headers.get("content-type", "").lower():
            return resp.text
    except requests.RequestException:
        pass
    return None


def extension_segun_content_type(content_type, url):
    ctype = (content_type or "").lower()
    if "svg" in ctype:
        return "svg"
    if "icon" in ctype or ctype.endswith("/ico"):
        return "ico"
    if "png" in ctype:
        return "png"
    if "jpeg" in ctype or "jpg" in ctype:
        return "jpg"
    if "gif" in ctype:
        return "gif"
    if "webp" in ctype:
        return "webp"
    ext = os.path.splitext(urlparse(url).path)[1].lstrip(".").lower()
    if ext in EXTENSIONES:
        return ext
    return None


def guardar_data_uri(data_uri, destino):
    mime_match = re.match(r"data:([^;,]+)?(;base64)?,(.*)", data_uri, re.DOTALL)
    if not mime_match:
        return None
    mime, base64_flag, data = mime_match.groups()
    mime = (mime or "").lower()
    ext = "svg" if "svg" in mime else "png" if "png" in mime else "ico" if "icon" in mime else None
    if not ext:
        return None
    try:
        if base64_flag:
            contenido = base64.b64decode(data)
        else:
            contenido = unquote(data).encode("utf-8")
    except Exception:
        return None
    if not contenido:
        return None
    destino = os.path.splitext(destino)[0] + "." + ext
    with open(destino, "wb") as f:
        f.write(contenido)
    return destino


def descargar_archivo(url, destino, timeout=TIMEOUT):
    try:
        resp = requests.get(url, headers=HEADERS, timeout=timeout, allow_redirects=True)
        if resp.status_code == 200 and len(resp.content) > 100:
            content_type = resp.headers.get("content-type", "").lower()
            if "image" in content_type or "octet-stream" in content_type or not content_type:
                ext = extension_segun_content_type(content_type, url)
                if ext:
                    destino = os.path.splitext(destino)[0] + "." + ext
                with open(destino, "wb") as f:
                    f.write(resp.content)
                return destino
        return None
    except requests.RequestException:
        return None


def descargar_via_google_favicon(domain, destino):
    url = GOOGLE_FAVICON.format(domain=domain)
    return descargar_archivo(url, destino)


def descargar_favicon_directo(domain, destino):
    favicon_url = f"https://{domain}/favicon.ico"
    return descargar_archivo(favicon_url, destino)


def descargar_favicon_duckduckgo(domain, destino):
    url = f"https://icons.duckduckgo.com/ip3/{domain}.ico"
    return descargar_archivo(url, destino)


def prioridad_icono(tag):
    tag_lower = tag.lower()
    sizes = re.search(r'sizes\s*=\s*["\']?(\d+)x\d+', tag_lower)
    size_val = int(sizes.group(1)) if sizes else 16
    if "apple-touch-icon" in tag_lower:
        size_val = max(size_val, 180)
    return size_val


def descargar_favicon_desde_html(pagina_url, destino):
    html = obtener_html(pagina_url)
    if not html:
        return None
    base = pagina_url if pagina_url.endswith("/") else pagina_url + "/"

    candidatos = []
    for match in re.finditer(r'<link\b[^>]*?(?:\s*href\s*=\s*"([^"]*)"|\s*href\s*=\s*\'([^\']*)\')[^>]*>', html, re.IGNORECASE):
        tag = match.group(0)
        if not re.search(r'\brel\s*=\s*["\'](?:shortcut\s+)?(?:apple-touch-)?icon["\']', tag, re.IGNORECASE):
            continue
        href = (match.group(1) or match.group(2) or "").strip()
        if href:
            candidatos.append((prioridad_icono(tag), href))

    candidatos.sort(key=lambda x: x[0], reverse=True)

    for _, href in candidatos:
        if href.startswith("data:"):
            ruta = guardar_data_uri(href, destino)
            if ruta:
                return ruta
        else:
            favicon_url = urljoin(base, href)
            ruta = descargar_archivo(favicon_url, destino)
            if ruta:
                return ruta

    favicon_url = urljoin(base, "favicon.ico")
    return descargar_archivo(favicon_url, destino)


def descargar_fallback_pixel(nombre_clave, destino):
    remap = {
        "juego": "gamepad",
        "web": "earth",
        "calculadora": "calculator",
        "codigos": "code-json",
        "codi": "code-bracket",
        "algoritmos": "sitemap",
        "calendario": "calendar",
        "pokemon": "pokeball",
        "sopa": "square-opacity",
        "sudoku": "check-circle",
        "trivia": "help-box",
        "serpiente": "arrow-up-right",
        "carta": "credit-card",
        "palabra": "uppercase-letter",
        "marcadores": "bookmark",
        "linkedin": "linkedin",
        "threads": "message-diamond",
        "instagram": "brand-instagram",
        "facebook": "brand-facebook",
        "github": "github",
        "jira": "bug",
        "google": "google",
        "aws": "amazon",
        "python": "python",
        "flask": "flask",
        "django": "django",
        "fastapi": "fastapi",
        "tailwind": "tailwindcss",
        "react": "react",
        "svelte": "svelte",
        "vue": "vuejs",
        "angular": "angular",
        "node": "nodejs",
        "typescript": "typescript",
        "javascript": "javascript",
        "html": "html5",
        "css": "css3",
        "mongodb": "mongodb",
        "postgresql": "postgresql",
        "mysql": "database",
        "docker": "docker",
        "kubernetes": "kubernetes",
        "redis": "redis",
        "terraform": "terraform",
        "cli": "terminal",
        "api": "api-connection",
        "server": "server",
        "frontend": "monitor",
        "backend": "database",
        "blog": "blog",
        "portfolio": "palette",
        "site": "earth",
        "page": "page-down",
        "demo": "playbox",
        "proyecto": "folder",
        "project": "folder",
    }

    nombre_lower = nombre_clave.lower()
    icon_key = "link"

    for key, mapped in remap.items():
        if key in nombre_lower:
            icon_key = mapped
            break

    url = f"{FALLBACK_API}/mdi/{icon_key}.svg"
    return descargar_archivo(url, destino)


def descargar_icono_para(clave, nombre_fallback, domain, pagina_url):
    destino = os.path.join(ICON_DIR, f"{clave}.{DEFAULT_EXT}")

    if icono_ya_existe(clave):
        return "omitido"

    ruta = descargar_favicon_desde_html(pagina_url, destino)
    if ruta:
        return ruta

    if domain and domain not in ("localhost",):
        ruta = descargar_via_google_favicon(domain, destino)
        if ruta:
            return ruta
        ruta = descargar_favicon_directo(domain, destino)
        if ruta:
            return ruta
        ruta = descargar_favicon_duckduckgo(domain, destino)
        if ruta:
            return ruta

    ruta = descargar_fallback_pixel(nombre_fallback, destino)
    if ruta:
        return ruta

    return None


def main():
    if not os.path.exists(DATA_FILE):
        print(f"Error: No se encontró {DATA_FILE}")
        sys.exit(1)

    enlaces = extraer_enlaces_desde_js(DATA_FILE)
    total_enlaces = len(enlaces)
    descargados = 0
    omitidos = 0
    fallaron = 0

    dominios_procesados = {}

    print(f"Encontrados {total_enlaces} enlaces en {DATA_FILE}")
    print(f"Directorio de iconos: {ICON_DIR}\n")

    for idx, (nombre, url) in enumerate(enlaces, 1):
        domain = dominio_de_url(url)

        if domain and domain not in ("localhost",) and not es_dominio_excepcion(domain):
            clave = clave_dominio(domain)
            fuente = "dominio"
        else:
            clave = limpiar_nombre(nombre)
            fuente = "nombre"

        if clave in dominios_procesados:
            continue

        dominios_procesados[clave] = True
        destino = os.path.join(ICON_DIR, f"{clave}.{DEFAULT_EXT}")

        if icono_ya_existe(clave):
            omitidos += 1
            print(f"[{idx}/{total_enlaces}] {clave} ({fuente}) -> omite (ya existe)")
            continue

        print(f"[{idx}/{total_enlaces}] {clave} ({fuente})")
        resultado = descargar_icono_para(clave, nombre, domain, url)

        if resultado:
            print(f"  -> OK: {os.path.basename(resultado)}")
            descargados += 1
        else:
            print(f"  -> FALLÓ")
            fallaron += 1

    print(f"\n=== RESUMEN ===")
    print(f"Total enlaces: {total_enlaces}")
    print(f"Iconos únicos procesados: {len(dominios_procesados)}")
    print(f"Descargados: {descargados}")
    print(f"Omitidos (ya existían): {omitidos}")
    print(f"Fallidos: {fallaron}")


if __name__ == "__main__":
    main()