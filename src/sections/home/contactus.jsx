/**
 * Sección contacto: texto + datos (WhatsApp / email) y formulario a dos columnas.
 * Fondo heredado de `.landing-shell` (sin capa de color propia).
 */
import { useCallback } from 'react'
import '../../styles/sections/contactus.css'

function WhatsAppIcon() {
  return (
    <svg className="contact__channel-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="contact__channel-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>
  )
}

const SERVICE_OPTIONS = [
  { value: '', label: 'Selecciona un servicio …' },
  { value: 'hosting', label: 'Hosting Premium' },
  { value: 'paginas', label: 'Creación de páginas' },
  { value: 'diseno', label: 'Diseño profesional' },
  { value: 'venta', label: 'Páginas de venta' },
  { value: 'portafolio', label: 'Portafolio' },
  { value: 'cocina', label: 'Cocina & recetas' },
  { value: 'clinicas', label: 'Hospitales & clínicas' },
  { value: 'otro', label: 'Otro / a medida' },
]

export default function ContactUs() {
  const onSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])

  return (
    <section
      className="contact"
      id="contacto"
      aria-labelledby="contact-heading"
    >
      <div className="contact__inner">
        <div className="contact__grid">
          {/* Columna izquierda: copy + canales */}
          <div className="contact__info">
            <p className="contact__eyebrow">
              <span className="contact__eyebrow-line" />
              CONTACTANOS
            </p>
            <h2 id="contact-heading" className="contact__title">
              Trabajemos Juntos
            </h2>
            <p className="contact__lead">
              ¿Tienes un proyecto en mente? Cuéntanos tu idea y te respondemos en
              menos de 24 horas con una propuesta concreta.
            </p>

            <div className="contact__channels">
              <a
                className="contact__channel"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__channel-icon-wrap" aria-hidden="true">
                  <WhatsAppIcon />
                </span>
                <span className="contact__channel-text">
                  <span className="contact__channel-label">WHATSAPP</span>
                  <span className="contact__channel-value">+51 987 654 321</span>
                </span>
              </a>

              <div className="contact__divider" role="presentation" />

              <a
                className="contact__channel"
                href="mailto:zentrix@gmail.com"
              >
                <span className="contact__channel-icon-wrap" aria-hidden="true">
                  <MailIcon />
                </span>
                <span className="contact__channel-text">
                  <span className="contact__channel-label">EMAIL</span>
                  <span className="contact__channel-value">zentrix@gmail.com</span>
                </span>
              </a>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="contact__row contact__row--2">
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">
                  _TU_NOMBRE
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Tu nombre completo"
                  autoComplete="name"
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-email">
                  _EMAIL
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="tu@email.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-service">
                _SERVICIO
              </label>
              <select
                id="contact-service"
                name="service"
                className="contact__input contact__select"
                defaultValue=""
                required
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value || 'empty'} value={opt.value} disabled={opt.value === ''}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact__field contact__field--grow">
              <label className="contact__label" htmlFor="contact-message">
                _PROYECTO
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__input contact__textarea"
                rows={5}
                placeholder="Describe brevemente que necesitas"
              />
            </div>

            <button type="submit" className="contact__submit">
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
