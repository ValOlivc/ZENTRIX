/**
 * Galería de proyectos con carrusel tipo coverflow (Swiper).
 * Ancla `#trabajo` enlazada desde el header.
 */
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'

import '../../styles/sections/workgallery.css'

/** Capturas de ejemplo; sustituye `src` por assets reales en `public/` o `assets/`. */
const PROJECTS = [
  { id: 'wg-1', src: 'https://picsum.photos/seed/zentrixwg1/960/600', alt: 'Proyecto web 1' },
  { id: 'wg-2', src: 'https://picsum.photos/seed/zentrixwg2/960/600', alt: 'Proyecto web 2' },
  { id: 'wg-3', src: 'https://picsum.photos/seed/zentrixwg3/960/600', alt: 'Proyecto web 3' },
  { id: 'wg-4', src: 'https://picsum.photos/seed/zentrixwg4/960/600', alt: 'Proyecto web 4' },
  { id: 'wg-5', src: 'https://picsum.photos/seed/zentrixwg5/960/600', alt: 'Proyecto web 5' },
  { id: 'wg-6', src: 'https://picsum.photos/seed/zentrixwg6/960/600', alt: 'Proyecto web 6' },
]

export default function WorkGallery() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section className="work-gallery" id="trabajo" aria-labelledby="work-gallery-heading">
      <div className="work-gallery__inner">
        <h2 id="work-gallery-heading" className="work-gallery__title">
          PROYECTOS QUE HABLAN SOLOS
        </h2>
        <p className="work-gallery__subtitle">
          Diseños únicos para creativos, arquitectos, fotógrafos y profesionales. Tu trabajo merece
          una vitrina a la altura.
        </p>

        <div
          className="work-gallery__carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Proyectos destacados"
        >
          <Swiper
            className="work-gallery__swiper"
            modules={
              reduceMotion ? [Keyboard] : [EffectCoverflow, Keyboard, Autoplay]
            }
            effect={reduceMotion ? 'slide' : 'coverflow'}
            grabCursor
            centeredSlides
            slidesPerView={reduceMotion ? 1 : 'auto'}
            initialSlide={Math.min(2, PROJECTS.length - 1)}
            speed={reduceMotion ? 0 : 650}
            keyboard={{ enabled: true }}
            autoplay={
              reduceMotion
                ? false
                : {
                    delay: 3200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            loop
            loopAdditionalSlides={2}
            coverflowEffect={
              reduceMotion
                ? undefined
                : {
                    rotate: 22,
                    stretch: 0,
                    depth: 220,
                    modifier: 1.15,
                    slideShadows: true,
                  }
            }
          >
            {PROJECTS.map((p) => (
              <SwiperSlide key={p.id} className="work-gallery__slide">
                <div className="work-gallery__frame">
                  <img src={p.src} alt={p.alt} loading="lazy" decoding="async" width={960} height={600} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <a className="work-gallery__cta" href="#contacto">
          VER TODO
        </a>
      </div>
    </section>
  )
}
