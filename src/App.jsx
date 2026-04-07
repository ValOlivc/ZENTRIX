import Footer from './components/footer'
import Header from './components/header'
import Home from './sections/home/home'
import './landing-shell.css'

function App() {
  return (
    <main>
      <div className="landing-shell">
        <Header />
        <Home />
      </div>
      <Footer />
    </main>
  )
}

export default App
