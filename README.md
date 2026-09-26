# MARCADORES

> Organiza y accede rapidamente a tus enlaces favoritos

---

## Descripcion

**Marcadores** es una aplicacion web minimalista para gestionar y organizar enlaces web. Permite categorizar, buscar y acceder rapidamente a tus recursos favoritos con una interfaz limpia y moderna.

---

## Caracteristicas

```
+---------------------------------------------------+
|  13 categorias y 305 enlaces                      |
|  Busqueda en tiempo real por seccion              |
|  Tema claro y oscuro persistente                  |
|  Navegacion completa por teclado                  |
|  Diseno responsive para movil                     |
|  Contraste AA y soporte de movimiento reducido    |
|  Sin dependencias externas                        |
+---------------------------------------------------+
```

---

## Estructura del Proyecto

```
marcadores/
|-- index.html          Punto de entrada
|-- css/
|   `-- style.css       Tokens, temas y responsive
|-- js/
|   `-- script.js       Datos, logica y renderizado
`-- icon/
    |-- marcadores.png  Logo
    `-- enlaces/        160+ favicon icons
```

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estructura semantica |
| CSS3 | Custom properties, temas, grid y responsive |
| JavaScript | Logica y renderizado dinamico |

---

## Inicio Rapido

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Listo - no se requiere instalacion

---

## Categorias Disponibles

```
Redes Sociales       - 5 enlaces
Gestion              - 3 enlaces
Mis páginas web      - 15 enlaces
Documentación        - 15 enlaces
Herramientas         - 38 enlaces
APIs                 - 1 enlace
IA                   - 6 enlaces
Models IA            - 8 enlaces
For Developers       - 6 enlaces
Recursos             - 50 enlaces
Google               - 5 enlaces
Aprendizaje          - 9 enlaces
Github               - 144 enlaces
```

---

## Funcionalidades

### Busqueda por Seccion
Escribe en el campo de busqueda (o pulsa `/`) para filtrar enlaces dentro de la categoria actual. El filtrado oculta y muestra tarjetas existentes sin recrearlas, por lo que no hay parpadeo ni recarga de iconos. La busqueda ignora acentos y mayusculas.

### Tema Claro/Oscuro
El icono de la luna/sol alterna entre temas. La eleccion se guarda en `localStorage` y se aplica antes del primer pintado, asi que no hay destello al recargar. Si nunca eliges tema, la aplicacion sigue la preferencia del sistema.

### Navegacion por Categorias
Selecciona una categoria del panel lateral para ver sus enlaces. La categoria activa se marca con `aria-current`, el titulo se refleja en la cabecera y cada boton muestra su numero de enlaces.

### Atajos de Teclado

```
/            Enfocar el buscador
Escape       Vaciar la busqueda o cerrar el menu
↑ ↓          Recorrer las categorias
Tab          Recorrer tarjetas y controles
Enter        Abrir la categoria enfocada
```

---

## Diseno

### Sistema de tokens
Todos los colores, radios, sombras, tiempos de transicion y medidas estan definidos como custom properties en `:root`. El tema oscuro solo redefine ese bloque de tokens, sin duplicar reglas.

### Jerarquia
`H1` para la marca, `H2` para la categoria activa y `H3` para cada tarjeta. Los titulos largos se equilibran con `text-wrap: balance` y las descripciones se recortan a 3 lineas (2 en movil) con el texto completo disponible en el atributo `title`.

### Tarjetas
Cada tarjeta es una superficie clicable completa mediante un enlace que la cubre por encima (`aria-labelledby` apunta al titulo), de modo que hay un unico blanco y un unico elemento enfocable por enlace. El icono se resuelve probando las extensiones disponibles en `icon/enlaces/` y, si ninguna existe, queda el monograma con la inicial.

### Accesibilidad
- Contraste minimo AA (4.5:1) verificado en ambos temas
- Anillo de foco visible en todos los controles interactivos
- Contador de resultados anunciado con `aria-live`
- Menu lateral fuera del arbol de accesibilidad cuando esta cerrado
- `prefers-reduced-motion` desactiva animaciones y transiciones
- Soporte de `forced-colors` (alto contraste de Windows)

---

## Licencia

Proyecto bajo la licencia **MIT** - Ver [LICENSE](LICENSE) para detalles.

---

## Autor

**jeironpro** - Desarrollador Web
