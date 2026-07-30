import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import { realisations } from '../data/realisations'

const categories = ['Tous', 'Projet élèves', 'Formation terminée']

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? realisations
    : realisations.filter(r => r.categorie === activeCategory)

  return (
    <div className="pt-20">

      <PageHero
        tag="Nos réalisations"
        title="Ce que nous avons accompli ensemble."
        subtitle="Projets d'élèves, formations terminées la preuve concrète de ce que Burkina STEM Academy réalise."
      />

      {/* ── FILTRES ───────────────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="container-max section-padding">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold
                    transition-all duration-200
                    ${activeCategory === cat
                      ? 'bg-blue text-white'
                      : 'bg-[#F7F9FF] text-gray-500 hover:bg-blue/10 hover:text-blue'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GRILLE RÉALISATIONS ───────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-16">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {filtered.map((r, i) => (
              <ScrollReveal key={r.id} delay={(i % 3) * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm
                  hover:-translate-y-1 transition-transform duration-300 h-full">

                  {/* Image */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.titre}
                      className="w-full h-full object-cover hover:scale-105
                        transition-transform duration-500"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    {/* Badge catégorie + date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-3 py-1
                        rounded-full bg-blue/10 text-blue">
                        {r.categorie}
                      </span>
                      <span className="text-xs text-gray-400">{r.date}</span>
                    </div>

                    <h3 className="font-bold text-[#1C2833] text-lg mb-2">
                      {r.titre}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {r.description}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-[#0E4288] py-20">
        <div className="container-max section-padding">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center
              justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Votre enfant peut être la prochaine réalisation.
                </h2>
                <p className="text-[#D6EAF8]">
                  Inscrivez-le dès aujourd'hui et rejoignez l'aventure STEM.
                </p>
              </div>

              <a
                href="/contact"
                className="bg-gold text-[#412402] font-bold px-8 py-4
                  rounded-xl hover:-translate-y-1 transition-transform
                  duration-200 whitespace-nowrap text-sm flex-shrink-0"
              >
                Inscrire mon enfant
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

export default Realisations 