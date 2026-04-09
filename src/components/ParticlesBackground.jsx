/**
 * Capa de partículas animadas (tsParticles) dentro de `.landing-shell`.
 * El canvas va en posición absoluta detrás del header y las secciones (ver CSS).
 */
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import { getParticlesConfig } from '../js/particlesConfig'
import '../styles/components/particles-background.css'

export default function ParticlesBackground() {
  /** Evita montar `<Particles />` hasta que el motor y los plugins estén listos. */
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    // Registra plugins del bundle `tsparticles` (formas, color, enlaces, etc.).
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => setEngineReady(true))
  }, [])

  const options = useMemo(() => {
    // `prefers-reduced-motion`: menos animación; ver `getParticlesConfig(true)`.
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return getParticlesConfig(reduced)
  }, [])

  if (!engineReady) {
    // Misma capa visual que el canvas final para evitar saltos de layout al cargar.
    return <div className="particles-background particles-background--placeholder" aria-hidden />
  }

  return (
    <Particles
      id="tsparticles"
      className="particles-background"
      options={options}
    />
  )
}
