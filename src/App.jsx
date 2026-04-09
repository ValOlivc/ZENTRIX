import { useState } from 'react'

/**
 * Árbol principal: hero + servicios comparten el mismo fondo (`.landing-shell`).
 * El footer va aparte para que no herede partículas ni el degradado del shell.
 */
import Footer from './components/footer'
import Header from './components/header'
import ParticlesBackground from './components/ParticlesBackground'
import WorkGalleryOverlay from './components/WorkGalleryOverlay'
import Home from './sections/home/home'
import './landing-shell.css'
import Home2 from './sections/home/home2'
import Banner1 from './sections/home/banner1'
import Services from './sections/home/services'
import WorkGallery from './sections/home/workgallery'
import Plans from './sections/home/plans'
import ContactUs from './sections/home/contactus'
import Equipment from './sections/home/equipment'

function App() {
  const [workGalleryOpen, setWorkGalleryOpen] = useState(false)

  return (
    <main>
      <div className="landing-shell">
        {/* Orden: primero el fondo animado, luego contenido por encima (z-index en CSS). */}
        <ParticlesBackground />
        <Header />
        <Home />
        <Home2 />
        <Services />
        <WorkGallery onOpenFull={() => setWorkGalleryOpen(true)} />
        <Banner1 />
        <Plans />
        <Equipment />
        <ContactUs />
      </div>
      <div className="footer-shell">
        <Footer />
      </div>
      {workGalleryOpen ? (
        <WorkGalleryOverlay onClose={() => setWorkGalleryOpen(false)} />
      ) : null}
    </main>
  )
}

export default App
