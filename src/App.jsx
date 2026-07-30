import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Formations from './pages/Formations'
import HowItWorks from './pages/HowItWorks'
import Contact from './pages/Contact'
import Realisations from './pages/Realisations'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/a-propos"          element={<About />} />
          <Route path="/formations"        element={<Formations />} />
          <Route path="/comment-ca-marche" element={<HowItWorks />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
