/** Datos de la galería de trabajo: carrusel en landing + rejilla paginada en vista “ver todo”. */

export const WORK_GALLERY_CAROUSEL = [
  { id: 'wg-1', src: 'https://picsum.photos/seed/zentrixwg1/960/600', alt: 'Proyecto web 1' },
  { id: 'wg-2', src: 'https://picsum.photos/seed/zentrixwg2/960/600', alt: 'Proyecto web 2' },
  { id: 'wg-3', src: 'https://picsum.photos/seed/zentrixwg3/960/600', alt: 'Proyecto web 3' },
  { id: 'wg-4', src: 'https://picsum.photos/seed/zentrixwg4/960/600', alt: 'Proyecto web 4' },
  { id: 'wg-5', src: 'https://picsum.photos/seed/zentrixwg5/960/600', alt: 'Proyecto web 5' },
  { id: 'wg-6', src: 'https://picsum.photos/seed/zentrixwg6/960/600', alt: 'Proyecto web 6' },
]

export const GALLERY_PAGE_SIZE = 8
export const GALLERY_PAGE_TOTAL = 6

/**
 * 48 celdas (6 páginas × 8). En la primera página, celdas 5–8 son huecos grises (diseño referencia).
 */
function buildGridItems() {
  const total = GALLERY_PAGE_SIZE * GALLERY_PAGE_TOTAL
  const items = []
  for (let i = 0; i < total; i++) {
    if (i >= 4 && i < 8) {
      items.push({ id: `gf-${i}`, placeholder: true })
    } else {
      items.push({
        id: `gf-${i}`,
        src: `https://picsum.photos/seed/zgf${i}/800/500`,
        alt: `Proyecto ${i + 1}`,
      })
    }
  }
  return items
}

export const WORK_GALLERY_GRID_ITEMS = buildGridItems()
