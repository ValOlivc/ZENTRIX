import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import { getParticlesConfig } from '../js/particlesConfig'
import '../styles/components/particles-background.css'

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    // Carga el motor completo de tsParticles una sola vez.
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => setEngineReady(true))
  }, [])

  const options = useMemo(() => {
    // Respeta accesibilidad: menos movimiento si el usuario lo prefiere.
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return getParticlesConfig(reduced)
  }, [])

  if (!engineReady) {
    // Placeholder para mantener el espacio/capa mientras inicia el motor.
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
