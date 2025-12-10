# 🚀 Portafolio Web - Víctor Maldonado García

Portafolio profesional moderno con soporte para temas dark/light, internacionalización (ES/EN), y demos interactivas de proyectos.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Videos de Demostración](#-videos-de-demostración)
- [Iconos y Recursos](#-iconos-y-recursos)
- [Deployment](#-deployment)
- [Personalización](#-personalización)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)

---

## ✨ Características

- **🎨 Sistema de Temas**: Dark/Light con persistencia en cookies
- **🌐 Internacionalización**: Español e Inglés con detección automática
- **📱 Responsive**: Mobile-first, adaptable a todos los dispositivos
- **⚡ Performance**: Vanilla JS, sin frameworks pesados
- **🎬 Demos Interactivas**: Recreaciones funcionales de cada proyecto
- **✨ Animaciones**: Scroll reveal con AOS, partículas de fondo, micro-interacciones
- **🍪 GDPR Ready**: Banner de consentimiento de cookies

---

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html              # Página principal
├── css/
│   ├── main.css            # Estilos principales
│   ├── themes.css          # Variables y sistema de temas
│   ├── responsive.css      # Media queries y responsive design
│   └── components/
│       └── projects.css    # Estilos de demos interactivas
├── js/
│   ├── main.js             # Lógica principal (navegación, tabs, cookies)
│   ├── translations.js     # Sistema i18n y traducciones
│   ├── theme-toggle.js     # Toggle dark/light
│   └── animations.js       # Animaciones y efectos visuales
├── images/
│   ├── og-image.png        # Imagen para Open Graph (1200x630px)
│   ├── poster-labonc.jpg   # Poster para video Lab ONC
│   ├── poster-odontoline.jpg # Poster para video Odontoline
│   └── poster-pokednd.jpg  # Poster para video Pokémon D&D
├── videos/
│   ├── lab-onc/
│   │   └── demo.mp4        # Video demostración Lab ONC
│   ├── odontoline/
│   │   └── demo.mp4        # Video demostración Odontoline
│   └── poke-dnd/
│       └── demo.mp4        # Video demostración Pokémon D&D
├── icons/
│   └── favicon.svg         # Favicon del sitio
└── README.md
```

---

## 🎬 Videos de Demostración

### Especificaciones Técnicas

| Propiedad | Valor Recomendado |
|-----------|-------------------|
| **Formato** | MP4 (H.264 codec) |
| **Resolución** | 1280x720 (720p) o 1920x1080 (1080p) o 1080x1920 (Vertical) |
| **FPS** | 30 fps |
| **Duración** | 30-60 segundos |
| **Peso máximo** | 20 MB por video |
| **Bitrate** | 2-5 Mbps |

### Videos a Subir

#### 1. Lab ONC (`videos/lab-onc/demo.mp4`)
- **Contenido**: Navegación por dashboard
- **Duración**: 30 segundos
- **Poster**: Captura del dashboard principal

#### 2. Odontoline (`videos/odontoline/demo.mp4`)
- **Contenido**: Login, navegación por agenda, visualización de citas, notificación
- **Duración**: 21 segundos
- **Poster**: Captura de pantalla del login o agenda

#### 3. Pokémon D&D (`videos/poke-dnd/demo.mp4`)
- **Contenido**: Dashboard del entrenador, gestión de equipo, ver equipo
- **Duración**: 90 segundos
- **Poster**: Captura del dashboard con equipo visible

## 🎨 Iconos y Recursos

### Iconos de Tecnologías (CDN)

Los iconos del stack tecnológico se cargan desde **DevIcon CDN**:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
```

Todos están disponibles en el CDN.

### Iconos Disponibles Utilizados

| Tecnología | Clase DevIcon |
|------------|---------------|
| React | `devicon-react-original` |
| TypeScript | `devicon-typescript-plain` |
| JavaScript | `devicon-javascript-plain` |
| Python | `devicon-python-plain` |
| Node.js | `devicon-nodejs-plain` |
| PostgreSQL | `devicon-postgresql-plain` |
| Docker | `devicon-docker-plain` |
| Git | `devicon-git-plain` |
| Rust | `devicon-rust-original` |
| Tauri | `devicon-tauri-plain` |

### Favicon

Logo "VMG" personal.

### Open Graph Image

Imagen `images/og-image.png` de **1200x630 píxeles** para compartir en redes sociales.

**Contenido:**
- Nombre: Víctor Maldonado García
- Título: Ingeniero en Computación
- Fondo con paleta de colores (rojo/gris oscuro)

---

## 🚀 Deployment

### Hecho con GitHub Pages

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5 semántico
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript ES6+ (Vanilla)

### Librerías CDN
- [AOS](https://michalsnik.github.io/aos/) - Animaciones de scroll
- [DevIcon](https://devicon.dev/) - Iconos de tecnologías
- [Inter Font](https://fonts.google.com/specimen/Inter) - Tipografía

### Características Técnicas
- Mobile-first responsive design
- Sistema de temas con CSS Custom Properties
- Internacionalización sin dependencias
- Persistencia de preferencias en cookies

---

## 📄 Licencia

Este proyecto es de uso personal para Víctor Maldonado García.

---

## 📧 Contacto

- **Email**: vmaldonadog97@gmail.com
- **LinkedIn**: [victormg-dev](http://www.linkedin.com/in/victormg-dev)

---

**Desarrollado con ❤️ por Víctor Maldonado García**
