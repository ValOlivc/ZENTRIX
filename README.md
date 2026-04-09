# Zentrix

Hola. Este repo es la **landing** que estoy armando para presentar lo que hacemos: servicios, trabajo en equipo y una forma clara de contacto. No es un panel admin ni una tienda: es **una sola página** que cuenta la historia con scroll, anclas y un par de sorpresas visuales.

Si te gusta el look **oscuro**, con chispa **naranja** y un aire un poco *sci‑fi* sin ser exagerado, probablemente te sientas en casa aquí.

---

## Dale play: cómo se ve hoy

Recorrido por la página y el diseño actual (reproductor embebido; también puedes **descargar** el archivo):

<p align="center">
  <video width="100%" controls playsinline preload="metadata">
    <source src="public/zentrix-demo.mp4" type="video/mp4" />
    Si no ves el reproductor, abre el archivo: <a href="./public/zentrix-demo.mp4"><code>public/zentrix-demo.mp4</code></a>
  </video>
</p>

El vídeo vive en **`public/zentrix-demo.mp4`** (copia sin espacios en el nombre para que GitHub y el visor de Markdown resuelvan bien la ruta). La copia original en `src/assets/demo 1.mp4` puedes conservarla o borrarla si no la usas en código.

> **GitHub:** si el vídeo no carga en la vista del README, en la barra de direcciones del archivo en el repo elige **Raw** y sustituye en el `<source>` la URL que empiece por `https://raw.githubusercontent.com/...`.

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
