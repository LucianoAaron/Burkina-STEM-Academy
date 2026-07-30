import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'À propos',           path: '/a-propos' },
  { label: 'Formations',         path: '/formations' },
  { label: 'Comment ça marche',  path: '/comment-ca-marche' },
  { label: 'Contact',            path: '/contact' },
]

const socialLinks = [
  { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61590442866529' },
]

const Footer = () => {
  return (
    <footer className="bg-[#0D1422] text-white pt-16 pb-8">
      <div className="container-max section-padding">

        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12
          border-b border-white/10">

          {/* Colonne 1 — Identité */}
          <div className="flex flex-col gap-4">
            <div>
              <img src="/5.png" alt="Burkina STEM Academy" className="h-20" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Former les innovateurs de demain à Koudougou, Burkina Faso.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-medium px-3 py-1.5 rounded-md
                    bg-white/8 border border-white/15 text-gray-300
                    hover:bg-white/15 transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500
              uppercase mb-6">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white
                      transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500
              uppercase mb-6">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>+226 67 01 13 20</li>
              <li>+226 66 35 04 15</li>
              <li>burkinastemacademy@gmail.com</li>
              <li className="leading-relaxed">
                Siège : à 50m de l'école sud,<br />
                en face de la station OTAM,<br />
                Koudougou, Burkina Faso
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center
          justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2025 Burkina STEM Academy Koudougou, Burkina Faso
          </p>
          <p className="text-xs text-gray-600">
            Développé par MENSAH Aaron Luciano
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer