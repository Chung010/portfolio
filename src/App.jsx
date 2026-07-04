import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlitchLoader from './components/GlitchLoader'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './styles/globals.css'
import './styles/glitch.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    return <GlitchLoader onComplete={() => setLoaded(true)} />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <p>designed &amp; built by <strong style={{ color: '#f0f0f0' }}>Pao Banyaphon Jansommit</strong> · 2025</p>
      </footer>
    </BrowserRouter>
  )
}
