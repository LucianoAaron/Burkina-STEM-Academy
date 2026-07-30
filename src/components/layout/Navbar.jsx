import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Accueil',            path: '/' },
  { label: 'À propos',           path: '/a-propos' },
  { label: 'Formations',         path: '/formations' },
  { label: 'Nos réalisations', path: '/realisations' },
  { label: 'Comment ça marche',  path: '/comment-ca-marche' },
  { label: 'Contact',            path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location                  = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'}`}
    >
      <div className="container-max section-padding flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-blue font-bold text-lg leading-tight">
            <img src="/2.png" alt="Burkina STEM Academy" className="h-20" />
          </span>
        </Link>

        {/* Liens desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue
                  ${location.pathname === link.path
                    ? 'text-blue border-b-2 border-blue pb-1'
                    : 'text-gray-700'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <Link
          to="/contact"
          className="hidden lg:block bg-blue text-white text-sm font-medium
            px-5 py-2.5 rounded-lg hover:-translate-y-0.5 transition-transform duration-200"
        >
          Nous contacter
        </Link>

        {/* Bouton hamburger mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300
            ${isOpen ? 'opacity-0' : ''}`}
          />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300
        ${isOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}
      >
        <ul className="section-padding py-4 flex flex-col gap-4 bg-white">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block text-sm font-medium py-1 transition-colors duration-200
                  ${location.pathname === link.path
                    ? 'text-blue'
                    : 'text-gray-700 hover:text-blue'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="block bg-blue text-white text-sm font-medium
                text-center px-5 py-2.5 rounded-lg mt-2"
            >
              Nous contacter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar