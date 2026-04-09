# Zentrix

Sitio web de **una sola página** (landing) para presentar servicios digitales, portafolio y contacto. Está pensado con un estilo **oscuro y tecnológico**, con acentos cálidos en **naranja/coral** y tipografía que refuerza la identidad de marca.

## Stack

- **React 19** + **Vite 8**
- Estilos en **CSS** por componente y por sección (sin framework de UI)
- **tsParticles** para el fondo animado dentro del shell principal
- **Swiper** para el carrusel tipo *coverflow* en la galería de trabajos

## Identidad visual y diseño

- **Fondo:** negro profundo con **degradados radiales** (toques naranja y teal) que dan profundidad sin recargar. Las **partículas** enlazadas (`tsParticles`) añaden movimiento sutil detrás del contenido del *landing shell*.
- **Color de acento:** naranja (`#ff5c32` y variaciones) en títulos con degradado, bordes de botones tipo *ghost* y detalles de interfaz.
- **Tipografía:** títulos destacados con **Orbitron** (aspecto tech / futurista); cuerpo en fuentes del sistema para legibilidad.
- **Jerarquía:** secciones con anclas (`#servicios`, `#trabajo`, `#equipo`, `#contacto`, etc.) y un **header** fijo en la experiencia principal.
- **Footer** separado del shell animado para mantener contraste y legibilidad sobre fondo propio.

## Estructura del proyecto

```
src/
├── App.jsx                 # Orden de secciones y estado de la galería fullscreen
├── landing-shell.css       # Fondo compartido del hero y bloques internos
├── components/             # Header, Footer, partículas, overlay de galería
├── sections/home/          # Bloques de la landing (hero, servicios, galería, planes, etc.)
├── styles/                 # CSS por componente y por sección
├── data/                   # Datos de ejemplo (galería / carrusel)
└── js/                     # Configuración de partículas
```

### Secciones principales (orden aproximado)

1. **Home / hero** — Presentación inicial.
2. **Home2** — Puente hacia servicios (ancla `#servicios`).
3. **Services** — Catálogo de servicios.
4. **Work gallery** — Carrusel de proyectos; **«Ver todo»** abre una **vista a pantalla completa** con rejilla paginada y el mismo lenguaje visual (fondo decorativo, header reutilizado).
5. **Banner** — CTA y bloque visual lateral.
6. **Plans** — Planes o precios.
7. **Equipment** — Equipo.
8. **Contact** — Formulario o datos de contacto.

El **footer** vive fuera del `.landing-shell` para no mezclar el degradado animado con el pie de página.

## Scripts

| Comando        | Descripción              |
| -------------- | ------------------------ |
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Compilación producción   |
| `npm run preview` | Vista previa del build |
| `npm run lint` | ESLint                   |

## Desarrollo

Requisitos: **Node.js** reciente (compatible con Vite 8).

```bash
npm install
npm run dev
```

La app se sirve en la URL que indique Vite (por defecto `http://localhost:5173`).

---

*Proyecto Zentrix — landing orientada a presencia digital, portafolio y conversión.*
