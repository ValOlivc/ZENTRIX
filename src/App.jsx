import Footer from './components/footer'
import Header from './components/header'
import ParticlesBackground from './components/ParticlesBackground'
import Home from './sections/home/home'
import './landing-shell.css'
import Home2 from './sections/home/home2'

function App() {
  return (
    <main>
      <div className="landing-shell">
        <ParticlesBackground />
        <Header />
        <Home />
        <Home2 />
      </div>
      <div className="footer-shell">
        <Footer />
      </div>
    </main>
  )
}

export default App
