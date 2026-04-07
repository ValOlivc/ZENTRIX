import './home.css'

export default function Home() {
  return (
    <section className="home" id="home" aria-label="Inicio">
      <div className="home__inner">
        <h1 className="home__title">
          <span className="home__title-line">Construimos</span>
          <span className="home__title-line">Tu Presencia</span>
          <span className="home__title-line">Digital</span>
        </h1>

        <p className="home__lead">
          Diseñamos y desarrollamos soluciones web de alto impacto. Desde
          hosting hasta plataformas a medida — con la precisión que tu negocio
          merece.
        </p>

        <div className="home__actions">
          <a className="home__btn home__btn--primary" href="#contacto">
            Iniciar Proyecto
          </a>
          <a className="home__btn home__btn--secondary" href="#trabajo">
            Ver Trabajos
          </a>
        </div>
      </div>
    </section>
  )
}
