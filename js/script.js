// Base de datos de los enlaces seccionados por categoría
const datosMarcadores = {
    "Redes Sociales": [
        { nombre: "LinkedIn", descripcion: "Red profesional para conectar con otros profesionales y empresas.", url: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" },
        { nombre: "Threads", descripcion: "Plataforma de Meta para compartir actualizaciones de texto y unirse a conversaciones públicas.", url: "https://www.threads.com/" },
        { nombre: "Instagram", descripcion: "Red social para compartir fotos y videos.", url: "https://www.instagram.com/" },
        { nombre: "Facebook", descripcion: "Red social para conectar con amistades, familiares y comunidades de personas que comparten tus intereses.", url: "https://www.facebook.com/" },
    ],
    "Gestión": [
        { nombre: "GitHub", descripcion: "Plataforma principal para alojamiento de código e iteración de desarrollo.", url: "https://github.com/jeironpro?tab=repositories" },
        { nombre: "Jira", descripcion: "Software de seguimiento de incidentes y tablero ágil de proyectos.", url: "https://jeironpro.atlassian.net/jira/for-you" },
        { nombre: "phpMyAdmin", descripcion: "Administración visual y rápida para bases de datos MySQL y MariaDB.", url: "http://localhost/phpMyAdmin/index.php?route=/" },
    ],
    "Mis páginas web": [
        { nombre: "Portafolio", descripcion: "Mi portafolio personal de desarrollador.", url: "https://portafolio-jeironpro.pages.dev/" },
        { nombre: "Juego 7 Letras", descripcion: "Juego 7 Letras.", url: "https://jeironpro.github.io/juego-7-letras" },
        { nombre: "Juego Memoriza Carta", descripcion: "Memoriza Carta.", url: "https://jeironpro.github.io/juego-memoriza-carta" },
        { nombre: "Juego Palabra Oculta", descripcion: "Juego Palabra Oculta.", url: "https://jeironpro.github.io/juego-palabra-oculta" },
        { nombre: "Juego Preguntas Respuestas", descripcion: "Juego Preguntas Respuestas.", url: "https://juego-preguntas-respuestas.pages.dev/" },
        { nombre: "Juego Serpiente", descripcion: "Serpiente.", url: "https://jeironpro.github.io/juego-serpiente" },
        { nombre: "Juego Sopa Letras", descripcion: "Juego Sopa Letras.", url: "https://jeironpro.github.io/juego-sopa-letras" },
        { nombre: "Juego Sudoku", descripcion: "Juego Sudoku.", url: "https://jeironpro.github.io/juego-sudoku" },
        { nombre: "Juego Tic Tac Toe", descripcion: "Tic Tac Toe.", url: "https://jeironpro.github.io/juego-tic-tac-toe" },
        { nombre: "Marcadores", descripcion: "Marcadores.", url: "https://jeironpro.github.io/marcadores" },
        { nombre: "Web Algoritmos", descripcion: "Algoritmos.", url: "https://jeironpro.github.io/web-algoritmos" },
        { nombre: "Web Calculadora", descripcion: "Calculadora.", url: "https://jeironpro.github.io/web-calculadora" },
        { nombre: "Web Calculadora Edad", descripcion: "Calculadora Edad.", url: "https://jeironpro.github.io/web-calculadora-edad" },
        { nombre: "Web Calendario", descripcion: "Calendario.", url: "https://jeironpro.github.io/web-calendario" },
        { nombre: "Web Codi Wiki", descripcion: "Codi Wiki.", url: "https://jeironpro.github.io/web-codi-wiki" },
        { nombre: "Web Codigos Http", descripcion: "Codigos Http.", url: "https://jeironpro.github.io/web-codigos-http" },
        { nombre: "Web Conversor Universal", descripcion: "Conversor Universal.", url: "https://jeironpro.github.io/web-conversor-universal" },
        { nombre: "Web Convertidor Moneda", descripcion: "Convertidor Moneda.", url: "https://jeironpro.github.io/web-convertidor-moneda" },
        { nombre: "Web Curso Git", descripcion: "Curso Git.", url: "https://jeironpro.github.io/web-curso-git" },
        { nombre: "Web Curso Sql", descripcion: "Curso Sql.", url: "https://jeironpro.github.io/web-curso-sql" },
        { nombre: "Web Ejercicios Pyja", descripcion: "Ejercicios Pyja.", url: "https://jeironpro.github.io/web-ejercicios-pyja" },
        { nombre: "Web Generador Clave Secreta", descripcion: "Generador Clave Secreta.", url: "https://jeironpro.github.io/web-generador-clave-secreta" },
        { nombre: "Web Generador Codigo Qr", descripcion: "Generador Codigo Qr.", url: "https://jeironpro.github.io/web-generador-codigo-qr" },
        { nombre: "Web Generador Contrasena", descripcion: "Generador Contrasena.", url: "https://jeironpro.github.io/web-generador-contrasena" },
        { nombre: "Web Generador Crucigramas", descripcion: "Generador Crucigramas.", url: "https://jeironpro.github.io/web-generador-crucigramas" },
        { nombre: "Web Gestiona Presupuesto", descripcion: "Gestiona Presupuesto.", url: "https://jeironpro.github.io/web-gestiona-presupuesto" },
        { nombre: "Web Lector Arxiu", descripcion: "Lector Arxiu.", url: "https://jeironpro.github.io/web-lector-arxiu" },
        { nombre: "Web Lexaro", descripcion: "Lexaro.", url: "https://jeironpro.github.io/web-lexaro" },
        { nombre: "Web Narcopedia", descripcion: "Narcopedia.", url: "https://jeironpro.github.io/web-narcopedia" },
        { nombre: "Web Paises Visitados", descripcion: "Paises Visitados.", url: "https://jeironpro.github.io/web-paises-visitados" },
        { nombre: "Web Porcentaje Anual", descripcion: "Porcentaje Anual.", url: "https://jeironpro.github.io/web-porcentaje-anual" },
        { nombre: "Web Redimensiona Imagen", descripcion: "Redimensiona Imagen.", url: "https://jeironpro.github.io/web-redimensiona-imagen" },
        { nombre: "Web Reproductor Musica", descripcion: "Reproductor Musica.", url: "https://jeironpro.github.io/web-reproductor-musica" },
        { nombre: "Web Tests Daw", descripcion: "Tests Daw.", url: "https://jeironpro.github.io/web-tests-daw" },
        { nombre: "Web Curso DCS", descripcion: "Curso DCS.", url: "https://jeironpro.github.io/web-curso-dcs" },
        { nombre: "Web Pomodoro", descripcion: "Pomodoro", url: "https://web-pomodoro-44r.pages.dev" },
    ],
    "Proyectos FullStack": [
    	{ nombre: "Planical", descripcion: "Aplicación de calendario y gestión de tiempo.", url: "https://planical.pages.dev/login" },
    	{ nombre: "Web Pokemon", descripcion: "Pokemones todas las generaciones.", url: "https://web-pokemon.pages.dev/" },
    	{ nombre: "Web Naruto", descripcion: "Personajes del anime naruto.", url: "https://web-naruto.pages.dev/" },
    	{ nombre: "Web generador cv", descripcion: "Generador de currículum vitae en PDF con formulario web en 4 pasos.", url: "https://web-generador-cv.onrender.com/" },
    ],
    "Documentación": [
        { nombre: "Django", descripcion: "Framework web de alto nivel de Python para un desarrollo rápido y limpio.", url: "https://docs.djangoproject.com/" },
        { nombre: "Django Rest Framework", descripcion: "Kit de herramientas poderoso y flexible para construir APIs Web en Django.", url: "https://www.django-rest-framework.org/" },
        { nombre: "Docker", descripcion: "Documentación oficial sobre virtualización de aplicaciones con contenedores.", url: "https://docs.docker.com/" },
        { nombre: "SQLModel", descripcion: "Librería de persistencia SQL mezclando SQLAlchemy con Pydantic.", url: "https://sqlmodel.tiangolo.com/" },
        { nombre: "FastAPI", descripcion: "Framework de alto rendimiento de Python para crear APIs modernas basadas en Type Hints.", url: "https://fastapi.tiangolo.com/" },
        { nombre: "Spring Boot", descripcion: "Entorno de Java enfocado en simplificar y acelerar el desarrollo web y de microservicios.", url: "https://spring.io/quickstart" },
        { nombre: "OpenCode", descripcion: "Guía de iniciación técnica orientada a plataformas de asistencia inteligente AI.", url: "https://opencode.ai/docs" },
        { nombre: "Claude Code", descripcion: "Manual y APIs relacionadas sobre el uso integrado de LLMs enfocados en el coding.", url: "https://docs.anthropic.com/en/docs/claude-code" },
        { nombre: "Pyproject.toml", descripcion: "Referencia moderna estructural sobre manejo de dependencias en Python.", url: "https://python-poetry.org/docs/pyproject" },
        { nombre: "Android Studio", descripcion: "Tutoriales y base de conocimiento al usar la IDE canónica para crear apps en Android.", url: "https://developer.android.com/studio" },
        { nombre: "Expo", descripcion: "Librería y entorno que potencia y facilita la creación de apps con React Native.", url: "https://docs.expo.dev/" },
        { nombre: "React", descripcion: "Documentación fundamental de la biblioteca declarativa en JS de interfaces UI.", url: "https://es.react.dev/learn" },
        { nombre: "React Native", descripcion: "Guías nativas sobre creación de aplicaciones de móviles apoyándote en paradigmas de React.", url: "https://reactnative.dev/docs/getting-started" },
        { nombre: "Vite", descripcion: "Vite es una herramienta de desarrollo frontend ultrarrápida que impulsa la próxima generación de aplicaciones web.", url: "https://vite.dev/guide/" },
        { nombre: "Pencil", descripcion: "Información central para herramientas de bocetaje y diseño gráfico de interfaces.", url: "https://docs.pencil.dev/" },
    ],
    "Herramientas": [
        { nombre: "Supabase", descripcion: "Alternativa Backend-as-a-Service escalable basada de en PostgreSQL.", url: "https://supabase.com/dashboard" },
        { nombre: "Firebase", descripcion: "Alojamiento real-time, bases no-relacionales y utilidades generales que ofrece Google.", url: "https://console.firebase.google.com/" },
        { nombre: "Docker", descripcion: "Panel analítico de administración a tus imágenes publicadas en el Hub.", url: "https://app.docker.com/accounts/jeironpro" },
        { nombre: "PlanetScale", descripcion: "Bases de datos relacionales sin servidor creadas para la máxima escalabilidad y bifurcación.", url: "https://planetscale.com/" },
        { nombre: "Turso", descripcion: "Servicios de bases orientadas a SQLite perimetral o en los bordes para baja latencia.", url: "https://turso.tech/" },
        { nombre: "Upstash", descripcion: "Solución sin motor o infraestructura para Redis, analítica o mensajería Kafka.", url: "https://upstash.com/" },
        { nombre: "Neon Serverless Postgres", descripcion: "Plataforma revolucionaria para alojar PostgreSQL sin servidor elástico.", url: "https://neon.com/" },
        { nombre: "FossFLOW", descripcion: "Gestión automatizable de ramas o estructuras para despliegues dinámicos.", url: "https://github.com/stan-smith/FossFLOW" },
        { nombre: "Code Wiki", descripcion: "Repositorio online sobre pautas estéticas de ingeniería centralizado por Google.", url: "https://codewiki.google/" },
        { nombre: "RenderCV", descripcion: "Generación de Currículum en PDF usando un código base como infraestructura textual.", url: "https://rendercv.com/" },
        { nombre: "Online CSS Code Quality", descripcion: "Validación métrica por Project Wallace acerca de tus hojas de estilos y robustez.", url: "https://www.projectwallace.com/css-code-quality" },
        { nombre: "Vercel", descripcion: "Servidor súper rápido y red de distribución orientada especialmente a arquitecturas UI.", url: "https://vercel.com/new?teamSlug=jeironpros-projects" },
        { nombre: "Sentry", descripcion: "Tablero centralizado e integrado para trackear errores en ambientes web críticos en vivo.", url: "https://jeironpro.sentry.io/issues/" },
        { nombre: "DrawSQL", descripcion: "Plataforma estética para diagramar visualmente tus relaciones entre tablas y esquemas.", url: "https://drawsql.app/" },
        { nombre: "RunSQL", descripcion: "Playground directo desde navegador para jugar y analizar consultas SQL reales.", url: "https://runsql.com/" },
        { nombre: "CrewAI", descripcion: "Orquestación grupal en la plataforma de desarrollo multi-agente guiado por IAs.", url: "https://app.crewai.com/studio/v2" },
        { nombre: "NotebookLM", descripcion: "Modelo experimental impulsado sobre IA de Google guiando como un cuaderno investigativo inteligente.", url: "https://notebooklm.google.com/" },
        { nombre: "DrawDB", descripcion: "Editor de diseño de bases de datos, modelador de datos y generador SQL gratuito y de código abierto, sencillo e intuitivo.", url: "https://www.drawdb.app/" },
        { nombre: "Dokploy", descripcion: "Dokploy es una plataforma como servicio (PaaS) gratuita y autoalojada que simplifica el despliegue y la gestión de aplicaciones y bases de datos.", url: "https://github.com/Dokploy/dokploy" },
        { nombre: "Ip Query", descripcion: "Infraestructura de inteligencia IP. Datos de direcciones IP sencillos y directos. Abierto a todo el mundo. Admite consultas masivas, XML, YAML y JSON.", url: "https://ipquery.io/" },
        { nombre: "Web Check", descripcion: "Herramienta online de análisis web bastante potente, especialmente usada en ciberseguridad y desarrollo.", url: "https://web-check.xyz/" },
        { nombre: "InsForge", descripcion: "El backend diseñado para el desarrollo de agentes. Proporcione a los agentes todo lo que necesitan para lanzar aplicaciones full-stack.", url: "https://insforge.dev/" },
        { nombre: "Canva", descripcion: "Canva es una herramienta de diseño y publicación online que tiene como misión poner el poder del diseño al alcance de todo el mundo, para que cualquier persona pueda diseñar lo que quiera y publicar donde quiera.", url: "https://www.canva.com/" },
        { nombre: "Cloudflare Pages", descripcion: "Cloudflare Pages es un servicio de hosting y despliegue para sitios web estáticos y aplicaciones frontend modernas.", url: "https://dash.cloudflare.com/" },
        { nombre: "Render", descripcion: "Infraestructura intuitiva para escalar cualquier aplicación o agente desde su primer usuario hasta el mil millones.", url: "https://render.com/" },
        { nombre: "Railway", descripcion: "Railway es una plataforma en la nube integral para el despliegue de aplicaciones web, servidores, bases de datos y mucho más, con escalado, monitorización y seguridad automáticos.", url: "https://railway.com/dashboard" },
        { nombre: "Appwrite", descripcion: "Appwrite es una plataforma de código abierto para crear y escalar aplicaciones más rápidamente, que ofrece autenticación, bases de datos, almacenamiento, funciones, mensajería, tiempo real y alojamiento web, todo en un mismo lugar.", url: "https://cloud.appwrite.io/" },
        { nombre: "Spline", descripcion: "Spline es una plataforma de diseño para crear y colaborar en experiencias interactivas listas para la producción en tiempo real.", url: "https://spline.design/" },
        { nombre: "Fly io", descripcion: "La plataforma para desarrolladores que solo quieren lanzar sus productos. Impulsada por entornos de pruebas que te permiten desplegar cualquier código con total confianza.", url: "https://fly.io/dashboard/" },
    ],
    "APIs": [
        { nombre: "OpenAI API", descripcion: "Integración directa de inteligencia artificial y consumo de lenguajes o imágenes OpenAI.", url: "https://developers.openai.com/api/docs/quickstart" },
        { nombre: "NVIDIA models", descripcion: "Implementa y escala modelos en la infraestructura de GPU que prefieras con los microservicios de inferencia NVIDIA NIM.", url: "https://build.nvidia.com/models" },
    ],
    "IA": [
        { nombre: "ChatGPT", descripcion: "Plataforma modelo y de asistencia de conversación e ingeniería de sistema más famosa.", url: "https://chatgpt.com/" },
        { nombre: "Gemini", descripcion: "Motor masivo guiado por Google que integra multimodalidad desde su base interna.", url: "https://gemini.google.com/app?hl=es-ES" },
        { nombre: "Claude", descripcion: "El LLM superior creado por Anthropic, amigable, altamente humano y excelente programador.", url: "https://claude.ai/new" },
        { nombre: "Gamma", descripcion: "Gamma es tu socio de diseño de IA para presentaciones, sitios web, publicaciones en redes sociales y más, para que puedas concentrarte en lo que mejor haces.", url: "https://gamma.app/" },
        { nombre: "Mistral AI", descripcion: "La plataforma de IA más potente para empresas. Personaliza, ajusta e implementa asistentes de IA, agentes autónomos e IA multimodal con modelos abiertos.", url: "https://docs.mistral.ai/" },
        { nombre: "Odysseus", descripcion: "Odysseus es una interfaz autoalojada para interactuar con modelos de lenguaje: chat, agentes autónomos, herramientas, servicios de modelos, correo electrónico, investigación y mucho más. Prioriza la comunicación local, la privacidad y no utiliza telemetría. Solo tú y tus modelos.", url: "https://pewdiepie-archdaemon.github.io/odysseus/" }
    ],
    "Models IA": [
        { nombre: "Llama", descripcion: "El modelo LLaMA (Large Language Model Meta AI) es una familia de modelos de lenguaje desarrollados por Meta Platforms.", url: "https://www.llama.com/" },
        { nombre: "Qwen", descripcion: "Qwen (o Tongyi Qianwen) es una familia de modelos de lenguaje de inteligencia artificial (LLM) de alto rendimiento desarrollada por Alibaba Cloud.", url: "https://qwen.ai/qwenchat" },
        { nombre: "Deepseek", descripcion: "Modelos de lenguaje grande (LLMs) de alto rendimiento y código abierto.", url: "https://www.deepseek.com/en/" },
        { nombre: "Gemma", descripcion: "Gemma es una familia de modelos abiertos, ligeros y de última generación, creados a partir de la misma investigación y tecnología que se utilizó para desarrollar los modelos Gemini.", url: "https://deepmind.google/models/gemma/" },
        { nombre: "Phi", descripcion: "Los modelos Phi ofrecen soluciones de IA rentables y de alto rendimiento en el entorno periférico, ampliando los límites de la IA generativa.", url: "https://azure.microsoft.com/en-us/products/phi" },
    ],
    "For Developers": [
        { nombre: "Meta for Developers", descripcion: "Plataformas sobre infraestructura, apps VR, WhatsApp y software open source de Meta.", url: "https://developers.meta.com/" },
        { nombre: "Google for Developers", descripcion: "Conferencia y recursos técnicos de primera mano de toda la arquitectura web de Google.", url: "https://developers.google.com/" },
        { nombre: "Spotify for Developers", descripcion: "Recursos directos para manejar métricas musicales, SDK y manipulación a la red de Spotify.", url: "https://developer.spotify.com/" },
        { nombre: "Resend · Email for Developers", descripcion: "Nueva era de librerías backend con tipado firme dedicadas solo al email moderno.", url: "https://resend.com/" },
        { nombre: "APIs publicas for Developers", descripcion: "Enciclopedia interminable alojando llamadas gratuitas y sin token para cualquier prueba API.", url: "https://publicapis.dev/" },
        { nombre: "Free for developers", descripcion: "Fórmulas ahorrativas y tier generosos gratuitos a la hora usar hardware web o despliegues.", url: "https://free-for.dev/" },
    ],
    "Recursos": [
        { nombre: "Flaticon", descripcion: "Extensa recolección mundial de íconos web y variados por formato SVG, PNG, EPS.", url: "https://www.flaticon.com/" },
        { nombre: "Yesicon", descripcion: "Colección curada asombrosa orientada íntegramente de SVGs y tipografía iconográfica minimalista.", url: "https://yesicon.app/" },
        { nombre: "Visualising data structures", descripcion: "Academia interactiva y colorida con animaciones que ilustran listas, árboles web o grafos.", url: "https://visualgo.net/en" },
        { nombre: "Tools.design", descripcion: "Directorio selecto reuniendo plugins o librerías que alivian cargas pesadas de UI a nivel gráfico.", url: "https://www.toools.design/" },
        { nombre: "Free icons", descripcion: "Alternativa masiva web para recuperar iconitos ilustrativos u ornamentales gratuitos.", url: "https://freeicons.org/" },
        { nombre: "Floating UI", descripcion: "El software de primitivas responsable por menús y ventanas emergentes acoplándose a tu UI.", url: "https://floating-ui.com/" },
        { nombre: "Universal Icon Set", descripcion: "Sistema robusto y uniforme de iconografía neutral enfocada en apps del día a día.", url: "https://123d.one/icon-set" },
        { nombre: "Swiper", descripcion: "Librería puntera en JavaScript para implementar sliders con interacciones táctiles súper fluidas.", url: "https://swiperjs.com/" },
        { nombre: "Checkly", descripcion: "Soluciones de monitoreo proactivo usando pruebas sintéticas End-to-End en flujos vivos.", url: "https://www.checklyhq.com/" },
        { nombre: "Shape Divider App", descripcion: "Configurador en vivo sobre recortes geométricos y olas diseñadas con puro CSS.", url: "https://www.shapedivider.app/" },
        { nombre: "Transition CSS", descripcion: "Laboratorio online lleno de transiciones instantáneas aplicables tan solo arrastrando su clase.", url: "https://www.transition.style/" },
        { nombre: "Public APIs", descripcion: "Base enorme de APIs categorizadas a lo bestia para realizar llamadas rápidas.", url: "https://publicapis.io/" },
        { nombre: "Theme toggle effect", descripcion: "Inmerso compilado de SVG micro-animados al instante de habilitar claro-oscuro tu web.", url: "https://theme-toggle.rdsx.dev/" },
        { nombre: "Expo Icons", descripcion: "Vasto diccionario de material y vectores precargados a incrustar en tus apps Expo nativas.", url: "https://icons.expo.fyi/Index" },
        { nombre: "Font Source", descripcion: "Plataforma para desarrolladores web que ofrece fuentes tipográficas open source listas para usar en proyectos.", url: "https://fontsource.org/" },
        { nombre: "Icones", descripcion: "Herramienta para desarrolladores y diseñadores que funciona como un buscador y agregador gigante de iconos open source.", url: "https://icones.js.org/" },
        { nombre: "Lukacho UI", descripcion: "Componentes de interfaz de usuario especiales para tu sitio web, creados con React.js, TailwindCSS y FramerMotion.", url: "https://ui.lukacho.com/" },
        { nombre: "Skiper UI", descripcion: "Componentes totalmente nuevos y poco comunes para tu proyecto Next.js.", url: "https://skiper-ui.com/" },
        { nombre: "Godly", descripcion: "Una cuidada selección de más de 1000 de los mejores sitios web de IA, Web3, portafolios y otros sitios web destacados en Internet.", url: "https://godly.website/" },
        { nombre: "The System Design Primer", descripcion: "Aprender a diseñar sistemas escalables te ayudará a convertirte en un mejor ingeniero.", url: "https://github.com/donnemartin/system-design-primer" },
        { nombre: "Open Notebook", descripcion: "Una alternativa de código abierto y centrada en la privacidad a Google Notebook LM.", url: "https://github.com/lfnovo/open-notebook" },
        { nombre: "Interviewing", descripcion: "Entrevistas simuladas anónimas con ingenieros de Meta, Google, OpenAI, Amazon y otras empresas líderes.", url: "https://interviewing.io/" },
    ],
    "Google": [
        { nombre: "Gmail", descripcion: "Tu punto de bandeja indispensable y la llave en un ecosistema robusto universal de trabajo.", url: "https://mail.google.com/mail/u/0/?ogbl#inbox" },
        { nombre: "Google Fonts", descripcion: "Inmensurable repositorio canónico de pesos y familias de texto para tus estilos de internet.", url: "https://fonts.google.com/" },
        { nombre: "Google Icons", descripcion: "Símbolos súper estéticos (Material Symbols) proveídos como glifos tipográficos para tus vistas.", url: "https://fonts.google.com/icons" },
        { nombre: "Contraseña de aplicación", descripcion: "Control maestro de tokens de autorización localizados listos para habilitarle puertos al software subyacente.", url: "https://myaccount.google.com/apppasswords" },
    ],
    "Frontend Devs": [
        { nombre: "Coding Stella", descripcion: "Directrices estilísticas en vivo aportando resoluciones innovadoras al mundo frontend.", url: "https://github.com/codingstella/" },
        { nombre: "Frontend Joe", descripcion: "Maestro en disecciones minuciosas para solucionar enrevesadas interacciones neomórficas.", url: "https://github.com/frontend-joe/" },
    ],
    "Aprendizaje": [
        { nombre: "AWS Skill Builder", descripcion: "Plataforma oficial de Amazon Web Services para el desarrollo de habilidades técnicas y certificaciones en la nube.", url: "https://skillbuilder.aws/learn" },
        { nombre: "MPC for beginners", descripcion: "Recurso para aprender a usar el MPC de Akai.", url: "https://github.com/microsoft/mcp-for-beginners/tree/main" },
        { nombre: "Cisco Networking Academy", descripcion: "Plataforma oficial de Cisco para el desarrollo de habilidades técnicas y certificaciones en redes.", url: "https://www.netacad.com/" },
        { nombre: "Comprehensive Rust", descripcion: "Recurso para aprender a usar Rust.", url: "https://google.github.io/comprehensive-rust/es/" },
        { nombre: "30 Days Of JavaScript", descripcion: "Recurso para aprender a usar JavaScript.", url: "https://github.com/Asabeneh/30-Days-Of-JavaScript" },
        { nombre: "Halloween Dev", descripcion: "Recurso para aprender a hacer ejercicios de programación JavaScript.", url: "https://www.halloween.dev/es" },
        { nombre: "PaloAlto Networks", descripcion: "Cursos GRATUITOS de formación en ciberseguridad.", url: "https://www.paloaltonetworks.es/cyberpedia/free-cybersecurity-education-courses" },
        { nombre: "SQLBolt", descripcion: "SQLBolt es una web con una serie de lecciones y ejercicios interactivos diseñados para ayudarte a aprender SQL rápidamente directamente en tu navegador.", url: "https://sqlbolt.com/" },
        { nombre: "SQL Practice", descripcion: "Practica consultas SQL con una terminal en línea. Resuelve problemas de consultas SQL utilizando una base de datos de práctica. Aprende y mejora tus habilidades en SQL.", url: "https://www.sql-practice.com/" },
    ]
};

// Rutina corta expresada usando Arrow Function para crear nodos de texto
const agregarTextoAElemento = (elemento, texto) => {
    const nodoTexto = document.createTextNode(texto);
    elemento.appendChild(nodoTexto);
};

// Función principal declarativa que inicia las mecánicas
function inicializarAplicacion() {
    configurarCambioTema();
    configurarMenuMovil();
    renderizarCategorias();

    // Obtener nombres de las categorías evitando funciones anónimas
    const categoriasBase = Object.keys(datosMarcadores);
    if (categoriasBase.length > 0) {
        mostrarEnlacesPorCategoria(categoriasBase[0]);
    }
}

// Función declarativa para manejar el alternador de temas sin alterar textos
function cambiarTema() {
    const elementoRaiz = document.documentElement;
    const temaActual = elementoRaiz.getAttribute("data-tema");

    // Modificar únicamente el atributo para cambiar las variables globales
    if (temaActual === "oscuro") {
        elementoRaiz.removeAttribute("data-tema");
    } else {
        elementoRaiz.setAttribute("data-tema", "oscuro");
    }
}

// Función declarativa central para buscar nuestro elemento tema en el footer
function configurarCambioTema() {
    const botonTema = document.getElementById("botonCambiarTema");
    if (botonTema) {
        botonTema.addEventListener("click", cambiarTema);
    }
}

// Función declarativa para limpiar contenedores visuales
function limpiarContenedor(contenedor) {
    if (!contenedor) return;
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

// Función declarativa vinculada a los botones en el panel
function manejarClicCategoria(evento) {
    const botonesLateral = document.querySelectorAll(".boton-categoria");

    for (const iteradorBoton of botonesLateral) {
        iteradorBoton.classList.remove("activo");
    }

    const botonPresionado = evento.currentTarget;
    botonPresionado.classList.add("activo");

    const nombreCategoriaDetectada = botonPresionado.getAttribute("data-nombre");
    mostrarEnlacesPorCategoria(nombreCategoriaDetectada);

    // Cerrar la interfaz móvil al seleccionar para maximizar confort UX
    const panelLateral = document.getElementById("panelCategorias");
    const overlay = document.getElementById("overlayMovil");
    if (panelLateral && overlay) {
        panelLateral.classList.remove("abierto");
        overlay.classList.remove("activo");
    }
}

// Función declarativa para controlar la entrada/salida del menú modal en dispositivos pequeños
function configurarMenuMovil() {
    const botonMenu = document.getElementById("botonMenuMovil");
    const overlay = document.getElementById("overlayMovil");
    const panelLateral = document.getElementById("panelCategorias");

    if (botonMenu && overlay && panelLateral) {
        // Abrir al presionar la hamburguesa
        botonMenu.addEventListener("click", function () {
            panelLateral.classList.add("abierto");
            overlay.classList.add("activo");
        });

        // Cerrar si hace clic por fuera
        overlay.addEventListener("click", function () {
            panelLateral.classList.remove("abierto");
            overlay.classList.remove("activo");
        });
    }
}

// Función declarativa mayor para renderizar listas dinámicas en el lateral
function renderizarCategorias() {
    // Apuntamos al contenedor interno debido a la nueva estructura HTML
    const panelGeneral = document.querySelector(".panel-lateral-fijo");
    if (!panelGeneral) return;

    const arregloCategorias = Object.keys(datosMarcadores);

    for (let indice = 0; indice < arregloCategorias.length; indice++) {
        const nombreSueltoCategoria = arregloCategorias[indice];

        const botonElementoUnico = document.createElement("button");
        botonElementoUnico.classList.add("boton-categoria");
        botonElementoUnico.setAttribute("data-nombre", nombreSueltoCategoria);

        if (indice === 0) {
            botonElementoUnico.classList.add("activo");
        }

        agregarTextoAElemento(botonElementoUnico, nombreSueltoCategoria);
        botonElementoUnico.addEventListener("click", manejarClicCategoria);
        panelGeneral.appendChild(botonElementoUnico);
    }
}

// Función declarativa para estructurar cada artículo presentador
function crearTarjetaEnlace(datosCompletosEnlace) {
    const contenedorTarjetaSuelto = document.createElement("article");
    contenedorTarjetaSuelto.classList.add("tarjeta-enlace");

    const contenedorEncabezado = document.createElement("div");
    contenedorEncabezado.classList.add("encabezado-tarjeta");

    const iconoEnlace = document.createElement("img");
    iconoEnlace.classList.add("icono-tarjeta");
    const nombreLimpio = datosCompletosEnlace.nombre.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const EXTENSIONES_ICONO = ["svg", "jpg", "jpeg", "ico", "gif", "png", "webp"];
    let indiceExtension = 0;
    const baseRuta = `icon/enlaces/${nombreLimpio}`;
    function cargarIcono() {
        if (indiceExtension >= EXTENSIONES_ICONO.length) {
            iconoEnlace.style.display = "none";
            return;
        }
        iconoEnlace.setAttribute("src", `${baseRuta}.${EXTENSIONES_ICONO[indiceExtension]}`);
        indiceExtension++;
    }
    iconoEnlace.setAttribute("alt", `Icono de ${datosCompletosEnlace.nombre}`);
    iconoEnlace.addEventListener("error", cargarIcono);
    cargarIcono();

    const tituloDeLaTarjeta = document.createElement("h2");
    tituloDeLaTarjeta.classList.add("titulo-enlace");
    agregarTextoAElemento(tituloDeLaTarjeta, datosCompletosEnlace.nombre);

    contenedorEncabezado.appendChild(iconoEnlace);
    contenedorEncabezado.appendChild(tituloDeLaTarjeta);

    const detalleDeLaTarjeta = document.createElement("p");
    detalleDeLaTarjeta.classList.add("descripcion-enlace");
    agregarTextoAElemento(detalleDeLaTarjeta, datosCompletosEnlace.descripcion);

    const vinculoDeLaTarjeta = document.createElement("a");
    vinculoDeLaTarjeta.classList.add("boton-abrir");
    vinculoDeLaTarjeta.setAttribute("href", datosCompletosEnlace.url);
    vinculoDeLaTarjeta.setAttribute("target", "_blank");
    vinculoDeLaTarjeta.setAttribute("rel", "noopener noreferrer");
    agregarTextoAElemento(vinculoDeLaTarjeta, "Abrir Enlace");

    contenedorTarjetaSuelto.appendChild(contenedorEncabezado);
    contenedorTarjetaSuelto.appendChild(detalleDeLaTarjeta);
    contenedorTarjetaSuelto.appendChild(vinculoDeLaTarjeta);

    return contenedorTarjetaSuelto;
}

// Función mayor encargada del control de la sección de tarjetas
function mostrarEnlacesPorCategoria(categoriaPedida) {
    const cuadroParaLosEnlaces = document.getElementById("areaEnlaces");
    if (!cuadroParaLosEnlaces) return;

    limpiarContenedor(cuadroParaLosEnlaces);

    const todosLosEnlacesPertenecientes = datosMarcadores[categoriaPedida] || [];

    for (const enlaceSingular of todosLosEnlacesPertenecientes) {
        const tarjetaEnsamblePreparada = crearTarjetaEnlace(enlaceSingular);
        cuadroParaLosEnlaces.appendChild(tarjetaEnsamblePreparada);
    }
}

// Inicialización de la aplicación
window.addEventListener("DOMContentLoaded", inicializarAplicacion);
