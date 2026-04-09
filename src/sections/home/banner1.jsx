/**
 * Banner: copy + CTA a la izquierda; imagen a la derecha.
 * Cambia la importación cuando tengas el asset definitivo (p. ej. `mi-banner.webp` en `assets/`).
 */
import '../../styles/sections/banner1.css'

export default function Banner1() {
  return (
    <section className="banner1" id="portafolio-banner" aria-labelledby="banner1-heading">
      <div className="banner1__grid">
        <div className="banner1__left">
          <p className="banner1__eyebrow">
            <span className="banner1__eyebrow-line" aria-hidden="true" />
            <span>PRESENCIA VISUAL</span>
          </p>
          <h2 id="banner1-heading" className="banner1__title">
            Portafolios que Generan Oportunidades
          </h2>
          <p className="banner1__lead">
            Diseños únicos para creativos, arquitectos, fotógrafos y profesionales. Tu trabajo
            merece una vitrina a la altura.
          </p>
          <a className="banner1__cta" href="#contacto">
            CREAR MI PORTAFOLIO
          </a>
        </div>

        <div className="banner1__right">
          <figure className="banner1__media">
            <img
              className="banner1__img"
              alt="Portafolio y presencia visual"
              loading="lazy"
              decoding="async"
              width={800}
              height={520}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
