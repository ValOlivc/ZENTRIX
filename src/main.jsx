import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Punto de entrada de la app React (Vite monta en `#root` de index.html).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* En desarrollo, StrictMode monta los efectos dos veces para detectar efectos secundarios. */}
    <App />
  </StrictMode>
)

