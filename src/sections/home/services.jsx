/**
 * Sección "Nuestros servicios": ticker, cabecera y rejilla 2×8 tarjetas.
 * El fondo lo aporta `.landing-shell` (esta sección va con background transparente).
 */
import '../../styles/sections/services.css'

/** Textos del carrusel superior (se duplica en el DOM para el efecto marquee infinito). */
const TICKER_ITEMS = [
  'Sitios Médicos',
  'Cocina & Recetas',
  'SEO Avanzado',
  'Branding Digital',
  'Hosting Premium',
  'Diseño Web',
  'E-Commerce',
  'Portafolios',
]

const SERVICES = [
  {
    num: '01',
    title: 'Hosting Premium',
    description:
      'Infraestructura robusta, SSL y soporte 24/7 con 99.9% de uptime garantizado.',
    icon: 'terminal',
  },
  {
    num: '02',
    title: 'Creación de Páginas',
    description:
      'Sitios web modernos con las últimas tecnologías y mejores prácticas del mercado.',
    icon: 'layout',
  },
  {
    num: '03',
    title: 'Diseño Profesional',
    description:
      'Interfaces elegantes y funcionales que representan tu marca con autoridad.',
    icon: 'pen',
  },
  {
    num: '04',
    title: 'Páginas de Venta',
    description:
      'E-commerce y landing pages optimizadas para convertir visitantes en clientes.',
    icon: 'chart',
  },
  {
    num: '05',
    title: 'Portafolio',
    description:
      'Plataformas visuales de alto impacto para mostrar tu trabajo al mundo.',
    icon: 'profile',
  },
  {
    num: '06',
    title: 'Cocina & Recetas',
    description:
      'Plataformas para chefs y restaurantes con recetarios y reservas online.',
    icon: 'food',
  },
  {
    num: '07',
    title: 'Hospitales & Clínicas',
    description:
      'Soluciones digitales médicas con agendas, expedientes y portales de pacientes.',
    icon: 'hospital',
  },
  {
    title: '¿Algo diferente?',
    description:
      'Cualquier industria, cualquier necesidad. Cuéntanos y lo construimos.',
    icon: 'plus',
  },
]

function ServiceIcon({ name }) {
  const common = { className: 'services__card-icon', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, 'aria-hidden': true }
  switch (name) {
    case 'terminal':
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
          <path d="M14 16l4-4-4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'layout':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    case 'pen':
      return (
        <svg {...common}>
          <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L8 18l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M3 3v18h18" strokeLinecap="round" />
          <path d="M7 14l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'profile':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="12" cy="10" r="2.5" />
          <path d="M8 17c1.2-1.5 2.8-2 4-2s2.8.5 4 2" strokeLinecap="round" />
        </svg>
      )
    case 'food':
      return (
        <svg {...common}>
          <path d="M6 3v18M6 3c2 0 3 2 3 5s-1 5-3 5M14 8v13M14 8c2.5 0 4 2 4 6.5" strokeLinecap="round" />
        </svg>
      )
    case 'hospital':
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="13" rx="1" />
          <path d="M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2M12 12v4M10 14h4" strokeLinecap="round" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...common} strokeWidth={1.25}>
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export default function Services() {
  const tickerLine = TICKER_ITEMS.join(' — ')

  return (
    <section
      className="services"
      id="servicios"
      aria-labelledby="services-heading"
    >
      {/* Carrusel horizontal en la parte superior (animación en CSS; se pausa con prefers-reduced-motion). */}
      <div className="services__ticker" aria-hidden="true">
        <div className="services__ticker-inner">
          <p className="services__ticker-track">{tickerLine}</p>
          <p className="services__ticker-track" aria-hidden="true">
            {tickerLine}
          </p>
        </div>
      </div>

      <div className="services__inner">
        <header className="services__head">
          <p className="services__eyebrow">
            <span className="services__eyebrow-line" />
            NUESTROS SERVICIOS
          </p>
          <h2 id="services-heading" className="services__title">
            Todo lo que tu negocio necesita
          </h2>
          <p className="services__lead">
            Ofrecemos soluciones tecnológicas completas, desde la infraestructura
            hasta el diseño final.
          </p>
        </header>

        <ul className="services__grid">
          {SERVICES.map((item) => (
            <li key={item.num} className={`services__card services__card--${item.num}`}>
              {/* Capa decorativa por tarjeta (sustituye fotos de stock; ajusta en CSS si añades imágenes reales). */}
              <div className="services__card-bg" aria-hidden="true" />
              <span className="services__card-num">{item.num}</span>
              <div className="services__card-body">
                <ServiceIcon name={item.icon} />
                <h3 className="services__card-title">{item.title}</h3>
                <p className="services__card-text">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
