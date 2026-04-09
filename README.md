# Zentrix

Hola. Este repo es la **landing** que estoy armando para presentar lo que hacemos: servicios, trabajo en equipo y una forma clara de contacto. No es un panel admin ni una tienda: es **una sola página** que cuenta la historia con scroll, anclas y un par de sorpresas visuales.

Si te gusta el look **oscuro**, con chispa **naranja** y un aire un poco *sci‑fi* sin ser exagerado, probablemente te sientas en casa aquí.

---

## Dale play: cómo se ve hoy

Nada como un vídeo para captar el movimiento del fondo, el carrusel y la galería fullscreen. **Sustituye el enlace de abajo por el tuyo** (YouTube, Loom, Vimeo o el archivo que subas a tu hosting).

<!-- Opción A: enlace directo (cambia la URL) -->
**[Ver recorrido por la página y el diseño actual →](https://www.youtube.com/watch?v=TU_VIDEO_ID)**

<!-- Opción B: miniatura clickeable (descomenta y pon tu ID de YouTube)
[![Recorrido visual de Zentrix](https://img.youtube.com/vi/TU_VIDEO_ID/hqdefault.jpg)](https://www.youtube.com/watch?v=TU_VIDEO_ID)
-->

<!-- Opción C: vídeo en el repo — sube tu .mp4 a `public/` y usa la ruta en producción, por ejemplo:
https://tudominio.com/zentrix-demo.mp4
-->

> **Tip:** Si usas GitHub, también puedes **arrastrar un .mp4** en un comentario de issue o en el propio README al editar; te dará una URL `user-images.githubusercontent.com` que puedes pegar aquí como enlace o incrustar.

---

## Qué tiene de especial (el diseño)

No quería otra landing blanca y plana. Aposté por:

- **Fondo vivo:** negro con **degradados** suaves (naranja y un toque **teal**) para que no se sienta una caja vacía.
- **Partículas** conectadas (`tsParticles`) que se mueven detrás del contenido sin robar foco.
- **Tipografía Orbitron** en los titulares: remata el rollo tecnológico; el cuerpo del texto sigue siendo cómodo de leer en sistema.
- **Acento naranja** (`#ff5c32` y familia) en degradados, bordes de botones tipo *ghost* y CTAs.
- **Galería de trabajos** con carrusel *coverflow* (Swiper) y, si le das a **«Ver todo»**, se abre una **vista completa** con rejilla y paginación, mismo lenguaje visual.
- El **footer** va aparte del bloque principal a propósito: así el pie se lee bien sin pelear con el degradado animado.

En conjunto: oscuro pero cálido, ordenado y con personalidad propia.

---

## Stack (por si te interesa el código)

| Qué | Con qué |
| --- | --- |
| Interfaz | **React 19** |
| Build | **Vite 8** |
| Estilos | **CSS** a mano, por componente y sección |
| Fondo animado | **tsParticles** |
| Carrusel de proyectos | **Swiper** |

Sin Tailwind ni librería de componentes: más control, más curación visual.

---

## Cómo está organizado el proyecto

```
src/
├── App.jsx              → orden de secciones + estado de la galería fullscreen
├── landing-shell.css    → “caja” visual compartida (hero + bloques)
├── components/          → Header, Footer, partículas, overlay de galería
├── sections/home/       → cada bloque de la landing
├── styles/              → CSS por pieza
├── data/                → datos de ejemplo (galería / carrusel)
└── js/                  → config de partículas
```

Flujo aproximado al bajar la página: **Home** → puente a servicios → **Servicios** → **Galería de trabajo** (carrusel + opción “ver todo”) → **Banner** → **Planes** → **Equipo** → **Contacto**. El pie queda fuera del shell animado.

---

## Cómo levantar el proyecto en tu máquina

Necesitas **Node.js** razonablemente actual (va bien con Vite 8).

```bash
npm install
npm run dev
```

Abre lo que te indique la terminal (suele ser `http://localhost:5173`). Para compilar:

```bash
npm run build
npm run preview   # ver el build como en producción
```

Y si quieres pasar el linter: `npm run lint`.

---

## Última palabra

Este README lo fui dejando como **bitácora** del diseño y del stack. Si algo no cuadra o quieres proponer un cambio, adelante: el código y la página siguen en evolución.

**— Zentrix**
