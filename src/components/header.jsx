import '../styles/components/header.css'

// Ítems de navegación principal del header.
const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  return (
    // Header principal con marca, navegación y CTA.
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/">
          <span className="site-header__wordmark">ZENTRIX</span>
        </a>

        <nav className="site-header__nav" aria-label="Principal">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="site-header__cta" href="#cotizar">
          Cotizar
          <svg
            className="site-header__cta-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </header>
  )
}
