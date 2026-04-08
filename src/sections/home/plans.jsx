/**
 * Sección de planes / precios — tres tarjetas con lista de características.
 * Fondo: transparente (usa el degradado de `.landing-shell`).
 */
import '../../styles/sections/plans.css'

/** Cada ítem: texto visible y si está incluido en el plan (afecta estilo del check). */
const PLANS = [
  {
    id: 'basico',
    title: 'Básico',
    description:
      'Ideal para emprendedores y negocios que dan sus primeros pasos digitales.',
    price: '890',
    priceMeta: 'pago único · entrega en 7 días',
    features: [
      { text: 'Sitio web de hasta 5 páginas', included: true },
      { text: 'Diseño responsive (móvil + desktop)', included: true },
      { text: 'Formulario de contacto', included: true },
      { text: 'Integración Google Maps', included: true },
      { text: '1 mes de soporte incluido', included: true },
      { text: 'Tienda / E-commerce', included: false },
      { text: 'Blog o sección de noticias', included: false },
      { text: 'Panel de administración', included: false },
    ],
  },
  {
    id: 'profesional',
    title: 'Profesional',
    description:
      'Para negocios que necesitan una presencia digital sólida y herramientas de gestión.',
    price: '2,200',
    priceMeta: 'pago único · entrega en 14 días',
    features: [
      { text: 'Sitio web de hasta 12 páginas', included: true },
      { text: 'Diseño UI/UX personalizado', included: true },
      { text: 'Blog o sección de noticias', included: true },
      { text: 'Panel de administración (CMS)', included: true },
      { text: 'Optimización SEO básica', included: true },
      { text: 'Integración redes sociales', included: true },
      { text: '3 meses de soporte incluido', included: true },
      { text: 'Tienda / E-commerce', included: false },
    ],
  },
  {
    id: 'completo',
    title: 'Completo',
    description:
      'Para empresas que requieren e-commerce, datos y acompañamiento cercano en todo el ciclo.',
    price: '5,500',
    priceMeta: 'pago único · entrega en 21 días',
    features: [
      { text: 'Páginas ilimitadas', included: true },
      { text: 'Tienda E-commerce completa', included: true },
      { text: 'Pasarela de pagos integrada', included: true },
      { text: 'Panel de administración avanzado', included: true },
      { text: 'SEO avanzado + Analytics', included: true },
      { text: 'Hosting incluido (1 año)', included: true },
      { text: '6 meses de soporte incluido', included: true },
      { text: 'Capacitación del equipo', included: true },
    ],
  },
]

function FeatureRow({ text, included }) {
  return (
    <li
      className={`plans__feature${included ? '' : ' plans__feature--off'}`}
    >
      <span className="plans__check" aria-hidden="true">
        {included ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </span>
      <span>{text}</span>
    </li>
  )
}

export default function Plans() {
  return (
    <section
      className="plans"
      id="planes"
      aria-labelledby="plans-heading"
    >
      <div className="plans__inner">
        <header className="plans__head">
          <p className="plans__eyebrow">
            <span className="plans__eyebrow-line" />
            PLANES
          </p>
          <h2 id="plans-heading" className="plans__title">
            Inversión transparente sin sorpresas
          </h2>
          <p className="plans__lead">
            Elige el plan que se adapta a tu negocio. Todos incluyen soporte y
            revisiones.
          </p>
        </header>

        <ul className="plans__grid">
          {PLANS.map((plan) => (
            <li key={plan.id} className="plans__card">
              <div className="plans__card-inner">
                <h3 className="plans__card-title">{plan.title}</h3>
                <p className="plans__card-desc">{plan.description}</p>

                <div className="plans__price">
                  <span className="plans__price-prefix">S/</span>
                  <span className="plans__price-value">{plan.price}</span>
                </div>
                <p className="plans__price-meta">{plan.priceMeta}</p>

                <ul className="plans__features">
                  {plan.features.map((f) => (
                    <FeatureRow
                      key={`${plan.id}-${f.text}`}
                      text={f.text}
                      included={f.included}
                    />
                  ))}
                </ul>

                <a className="plans__cta" href="#contacto">
                  <span className="plans__cta-text">CONTACTAR</span>
                  <span className="plans__cta-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
