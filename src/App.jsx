import Footer from './components/footer'
import Header from './components/header'
import ParticlesBackground from './components/ParticlesBackground'
import Home from './sections/home/home'
import './landing-shell.css'

function App() {
  return (
    <main>
      <div className="landing-shell">
        <ParticlesBackground />
        <Header />
        <Home />
      </div>
      <div className="footer-shell">
        <Footer />
      </div>
    </main>
  )
}

export default App
