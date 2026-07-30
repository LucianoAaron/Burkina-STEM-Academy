import ScrollReveal from '../components/ui/ScrollReveal'
import { formations, stageVacances } from '../data/formations'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ui/ImageSlider'
import Icon from '../components/ui/Icon'

const formationImages = [
  '/images/formations/formation1.jpg',
  '/images/formations/formation2.jpg',
  '/images/formations/formation3.jpg',
  '/images/formations/formation4.jpg',
  '/images/formations/formation5.jpg',
]

const Formations = () => {
  return (
    <div className="pt-20">

      {/* ── HERO AVEC SLIDER ─────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">

        {/* Slider en arrière-plan */}
        <div className="absolute inset-0">
          <ImageSlider images={formationImages} height="h-full" />
        </div>

        {/* Contenu */}
        <div className="container-max section-padding py-20 w-full relative z-20">
          <ScrollReveal delay={0}>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase
              text-gold mb-4" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
              Nos formations
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight
              max-w-2xl mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.6)' }}>
              Ce que votre enfant peut apprendre avec nous.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[#D6EAF8] text-lg max-w-xl leading-relaxed" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
              5 domaines de formation, encadrés par des formateurs passionnés,
              avec du vrai matériel professionnel.
            </p>
          </ScrollReveal>
        </div>

      </section>

      {/* ── 5 THÉMATIQUES ────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase
              text-blue mb-4">Au programme</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-4
              max-w-xl">
              5 domaines pour former les innovateurs de demain
            </h2>
            <p className="text-gray-500 mb-14 max-w-lg">
              Des formations pratiques, adaptées à chaque âge, pour développer
              les compétences du futur.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {formations.map((f, i) => (
              <ScrollReveal key={f.id} delay={(i % 4) * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden
                  hover:-translate-y-1 transition-transform duration-300 h-full">

                  {/* Barre couleur */}
                  <div className="h-1.5" style={{ backgroundColor: f.color }} />

                  <div className="p-6 flex flex-col h-full">
                    {/* Icône */}
                    <div className="w-12 h-12 rounded-xl flex items-center
                      justify-center text-xl mb-4"
                      style={{ backgroundColor: f.color + '20' }}>
                      <Icon name={f.icon} size={28} style={{ color: f.color }} />
                    </div>

                    {/* Badge âge */}
                    <span className="inline-block text-xs font-semibold px-3
                      py-1 rounded-full mb-4 w-fit"
                      style={{
                        backgroundColor: f.color + '15',
                        color: f.color,
                      }}>
                      {f.age ?? 'Âge à préciser'}
                    </span>

                    <h3 className="font-bold text-[#1C2833] mb-3">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {f.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAGE DE VACANCES ────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase
              text-red-600 mb-4">Offre spéciale</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-14">
              {stageVacances.title} {' '}
              <span className="text-blue">{stageVacances.subtitle}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-[#0E4288] rounded-2xl p-10 lg:p-14 relative
              overflow-hidden">

              {/* Décorations */}
              <div className="absolute top-[-60px] right-[-60px] w-[300px]
                h-[300px] rounded-full bg-blue/20 pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[60px] w-[180px]
                h-[180px] rounded-full bg-gold/10 pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-3 gap-10">

                {/* Colonne 1 — Infos principales */}
                <div className="lg:col-span-1">
                  <span className="inline-block bg-gold/20 text-gold text-xs
                    font-semibold px-4 py-1.5 rounded-full mb-6">
                    {stageVacances.target}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {stageVacances.tagline}
                  </h3>
                  <p className="text-[#D6EAF8] text-sm leading-relaxed mb-8">
                    {stageVacances.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-gold text-[#412402] font-bold
                      px-6 py-3.5 rounded-xl hover:-translate-y-1
                      transition-transform duration-200 text-sm"
                  >
                    Réserver ma place 
                  </Link>
                </div>

                {/* Colonne 2 — Sessions */}
                <div className="border-l border-white/15 pl-10">
                  <p className="text-xs font-semibold tracking-widest text-gold
                    uppercase mb-6">Sessions</p>
                  {stageVacances.sessions.map((s, i) => (
                    <div key={i} className="mb-6">
                      <p className="text-[#D6EAF8] text-sm mb-1">{s.label}</p>
                      <p className="text-white font-semibold">{s.dates}</p>
                    </div>
                  ))}
                </div>

                {/* Colonne 3 — Tarifs */}
                <div className="border-l border-white/15 pl-10">
                  <p className="text-xs font-semibold tracking-widest text-gold
                    uppercase mb-6">Tarifs</p>
                  <div className="mb-6">
                    <p className="text-[#D6EAF8] text-sm mb-1">
                      Frais d'inscription
                    </p>
                    <p className="text-white font-bold text-xl">
                      {stageVacances.tarifs.inscription}
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="text-[#D6EAF8] text-sm mb-1">Participation</p>
                    <p className="text-white font-bold text-xl">
                      {stageVacances.tarifs.participation}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 mt-4">
                    <p className="text-[#D6EAF8] text-xs mb-1">Lieu</p>
                    <p className="text-white text-sm font-semibold">
                      {stageVacances.lieu}
                    </p>
                  </div>
                </div>

              </div>

              {/* Badge places limitées */}
              <div className="relative z-10 mt-8 pt-8 border-t border-white/15">
                <p className="text-center text-red-300 text-sm font-semibold">
                   Places limitées Inscrivez-vous dès maintenant
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-20">
        <div className="container-max section-padding">
          <ScrollReveal>
            <div className="bg-blue rounded-2xl p-10 lg:p-14 flex flex-col
              lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Une question sur nos formations ?
                </h2>
                <p className="text-[#D6EAF8]">
                  Contactez-nous, nous vous aidons à choisir la formation
                  adaptée à votre enfant.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-gold text-[#412402] font-bold px-8 py-4
                  rounded-xl hover:-translate-y-1 transition-transform
                  duration-200 whitespace-nowrap text-sm flex-shrink-0"
              >
                Nous contacter
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

export default Formations