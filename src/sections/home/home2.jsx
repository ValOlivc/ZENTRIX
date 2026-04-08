import '../../styles/sections/home2.css'

const services = [
  {
    title: 'Diseño de soluciones',
    description:
      'Ideación de la solución a partir de la sesión informativa, diseño de la solución técnica, arquitectura y definición de requisitos.',
  },
  {
    title: 'Desarrollo',
    description:
      'Desarrollo completo de pila de software, UX/UI e integración con sistemas de terceros.',
  },
  {
    title: 'Mantenimiento',
    description:
      'Soporte para el desarrollo de aplicaciones, auditoría del desarrollo de terceros y certificación.',
  },
]

export default function Home2() {
  return (
    <section className="home2" id="servicios" aria-label="Qué necesitas">
      <div className="home2__inner">
        <div className="home2__visual" aria-hidden="true">
          <div className="home2__glow" />
        </div>

        <div className="home2__content">
          <h2 className="home2__title">¿Qué necesitas?</h2>

          <ul className="home2__list">
            {services.map((item) => (
              <li key={item.title} className="home2__item">
                <span className="home2__dot" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
