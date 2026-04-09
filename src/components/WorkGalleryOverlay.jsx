/**
 * Vista a pantalla completa: rejilla de proyectos, paginación y pie (al pulsar “Ver todo”).
 */
import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'

import Footer from './footer'
import Header from './header'
import {
  GALLERY_PAGE_SIZE,
  GALLERY_PAGE_TOTAL,
  WORK_GALLERY_GRID_ITEMS,
} from '../data/workGalleryData'

import '../styles/components/work-gallery-overlay.css'

export default function WorkGalleryOverlay({ onClose }) {
  const titleId = useId()
  const [page, setPage] = useState(1)

  const close = useCallback(() => {
    onClose?.()
  }, [onClose])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  const start = (page - 1) * GALLERY_PAGE_SIZE
  const slice = WORK_GALLERY_GRID_ITEMS.slice(start, start + GALLERY_PAGE_SIZE)

  const overlay = (
    <div
      className="wg-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="wg-overlay__bg" aria-hidden="true" />
      <div className="wg-overlay__header-slot">
        <Header onNavigate={close} />
      </div>

      <main className="wg-overlay__main">
        <h1 id={titleId} className="wg-overlay__title">
          PROYECTOS QUE HABLAN SOLOS
        </h1>
        <p className="wg-overlay__subtitle">
          Diseños únicos para creativos, arquitectos, fotógrafos y profesionales. Tu trabajo merece
          una vitrina a la altura.
        </p>

        <ul className="wg-overlay__grid">
          {slice.map((item) =>
            item.placeholder ? (
              <li key={item.id} className="wg-overlay__cell wg-overlay__cell--placeholder" />
            ) : (
              <li key={item.id} className="wg-overlay__cell">
                <img src={item.src} alt={item.alt} loading="lazy" width={800} height={500} />
              </li>
            ),
          )}
        </ul>

        <nav className="wg-overlay__pagination" aria-label="Páginas de proyectos">
          <button
            type="button"
            className="wg-overlay__page-btn"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-label="Página anterior"
          >
            ‹
          </button>
          {Array.from({ length: GALLERY_PAGE_TOTAL }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              className={
                n === page ? 'wg-overlay__page-num wg-overlay__page-num--active' : 'wg-overlay__page-num'
              }
              onClick={() => setPage(n)}
              aria-label={`Página ${n}`}
              aria-current={n === page ? 'page' : undefined}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            className="wg-overlay__page-btn"
            disabled={page >= GALLERY_PAGE_TOTAL}
            onClick={() => setPage((p) => Math.min(GALLERY_PAGE_TOTAL, p + 1))}
            aria-label="Página siguiente"
          >
            ›
          </button>
        </nav>
      </main>

      <div
        className="wg-overlay__footer-wrap"
        onClickCapture={(e) => {
          const a = e.target.closest('a[href^="#"]')
          if (a) close()
        }}
      >
        <Footer />
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}
