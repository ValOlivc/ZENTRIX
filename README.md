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

## Qué tiene de especial 

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

## Como se ve hoy
<img width="1365" height="634" alt="image" src="https://github.com/user-attachments/assets/1ca04acf-8a49-4cb5-b431-f8e6c10888a6" />
<img width="1365" height="634" alt="image" src="https://github.com/user-attachments/assets/fcd09a79-7ef6-4b92-ac38-89b44baadeff" />
<img width="566" height="639" alt="image" src="https://github.com/user-attachments/assets/f84fbbff-0581-4066-ac23-7dd3d94a530e" />
<img width="1365" height="636" alt="image" src="https://github.com/user-attachments/assets/a0621350-155c-4ca9-ad7b-34b2e476adf6" />
<img width="942" height="605" alt="image" src="https://github.com/user-attachments/assets/0a019294-f35d-4c83-a82c-5c0729b6ee06" />
<img width="779" height="410" alt="image" src="https://github.com/user-attachments/assets/a02bcd1d-ffc4-4934-b1ac-21d75ff9d8eb" />
<img width="804" height="427" alt="image" src="https://github.com/user-attachments/assets/e4e1bd19-ea25-4f45-9754-6dac29d83ba1" />
<img width="753" height="275" alt="image" src="https://github.com/user-attachments/assets/fc1da042-c64b-4e8e-9c9b-1cf5d25d0a95" />

**— Zentrix**
