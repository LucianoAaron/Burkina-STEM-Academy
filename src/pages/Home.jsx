import ScrollReveal from '../components/ui/ScrollReveal'
import { formations } from '../data/formations'
import HeroSlider from '../components/ui/HeroSlider'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'

// ── Données locales ───────────────────────────────────────────────
const stats = [
  { number: '6 à 18 ans',    label: 'Tranches d\'âge' },
  { number: '5 filières',    label: 'Drones · Robotique · Code' },
  { number: 'Koudougou',     label: 'Burkina Faso' },
  { number: '100% pratique', label: 'Apprentissage par projet' },
]

const steps = [
  { num: '01', icon: 'Phone', title: 'Contactez-nous',
    desc: 'Appelez-nous ou remplissez le formulaire. Réponse sous 24h.' },
  { num: '02', icon: 'GraduationCap', title: 'Choisissez une formation',
    desc: 'Nous vous guidons vers la formation adaptée à votre enfant.' },
  { num: '03', icon: 'CreditCard', title: 'Inscription & paiement',
    desc: 'Frais d\'inscription : 10 000 FCFA. Place immédiatement réservée.' },
  { num: '04', icon: 'Rocket', title: 'C\'est parti !',
    desc: 'Votre enfant rejoint sa classe et commence à apprendre.' },
]

const reasons = [
  { icon: 'Target', title: 'Pédagogie par projet',
    desc: 'Les enfants apprennent en créant de vrais projets concrets.' },
  { icon: 'GraduationCap', title: 'Formateurs qualifiés',
    desc: 'Une équipe passionnée, formée aux méthodes STEM pour les jeunes.' },
  { icon: 'Smartphone', title: 'Suivi des parents',
    desc: 'Vous êtes informés des progrès de votre enfant à chaque étape.' },
  { icon: 'Lightbulb', title: 'Équipement moderne',
    desc: 'Drones, kits robotique, ordinateurs — de vrais outils professionnels.' },
]

const featuredFormations = formations.filter(f => f.featured)

// ── Composants de section ─────────────────────────────────────────
const SectionTag = ({ text }) => (
  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue mb-4">
    {text}
  </p>
)

// ══════════════════════════════════════════════════════════════════
const Home = () => {
  return (
    <div className="pt-20">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center
        overflow-hidden">

        {/* Slider en arrière-plan */}
        <HeroSlider />

        {/* Cercles décoratifs */}
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px]
          rounded-full bg-blue/15 pointer-events-none z-10" />
        <div className="absolute bottom-[-40px] left-[40px] w-[220px] h-[220px]
          rounded-full bg-gold/10 pointer-events-none z-10" />

        <div className="container-max section-padding w-full grid lg:grid-cols-2
          gap-12 items-center py-20 relative z-10">

          {/* Texte gauche */}
          <div>
            <ScrollReveal delay={0}>
              <span className="inline-block bg-gold/20 text-gold text-xs
                font-semibold px-4 py-1.5 rounded-full mb-6">
                ✦ Ouverture 2025
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl lg:text-5xl font-bold text-white
                leading-tight mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.6)' }}>
                Votre enfant apprend à piloter des drones, concevoir des
                robots et programmer.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-blue-light text-lg leading-relaxed mb-8
                text-[#D6EAF8] drop-shadow-md" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                Former les innovateurs de demain dès l'âge de 6 ans,
                à Koudougou.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/formations"
                  className="bg-gold text-[#412402] font-bold px-6 py-3.5
                    rounded-xl hover:-translate-y-1 transition-transform
                    duration-200 text-sm"
                >
                  Découvrir nos formations
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 text-white border border-white/30
                    font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20
                    transition-colors duration-200 text-sm"
                >
                  Nous contacter
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Placeholder visuel droite */}
          <ScrollReveal delay={0.2} direction="left">
            
          </ScrollReveal>

        </div>
      </section>

      {/* ── 2. STATS BAND ────────────────────────────────────────── */}
      <section className="bg-blue py-7">
        <div className="container-max section-padding grid grid-cols-2
          lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <p className="text-white font-bold text-xl">{s.number}</p>
                <p className="text-[#D6EAF8] text-sm mt-1">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 3. FORMATIONS ────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <SectionTag text="Nos formations" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833]
              mb-4 max-w-xl">
              Ce que votre enfant va apprendre
            </h2>
            <p className="text-gray-500 mb-14 max-w-lg">
              Des formations pratiques, adaptées à chaque âge, pour
              développer les compétences du futur.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredFormations.map((f, i) => (
              <ScrollReveal key={f.id} delay={i * 0.1} className="h-full">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden
                  hover:-translate-y-1 transition-transform duration-300 h-full">
                  {/* Barre couleur */}
                  <div className="h-1.5" style={{ backgroundColor: f.color }} />
                  <div className="p-7">
                    {/* Icône */}
                    <div className="w-14 h-14 rounded-xl flex items-center
                      justify-center text-2xl mb-5"
                      style={{ backgroundColor: f.color + '20' }}>
                      <Icon name={f.icon} size={24} className="text-blue" />
                    </div>
                    {/* Badge âge */}
                    <span className="text-xs font-semibold px-3 py-1
                      rounded-full" style={{
                        backgroundColor: f.color + '18',
                        color: f.color,
                      }}>
                      {f.age ?? 'Âge à préciser'}
                    </span>
                    <h3 className="text-lg font-bold text-[#1C2833] mt-4 mb-3">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {f.description}
                    </p>
                    <Link
                      to="/formations"
                      className="text-sm font-semibold"
                      style={{ color: f.color }}
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bouton voir tout */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-14">
              <p className="text-gray-400 text-sm mb-4">
                Robotique · IA · Modélisation 3D · Anglais · Électronique · Initiation aux métiers
              </p>
              <Link
                to="/formations"
                className="inline-block bg-blue text-white font-semibold
                  px-8 py-3.5 rounded-xl hover:-translate-y-1 transition-transform
                  duration-200 text-sm"
              >
                Voir toutes nos formations
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. COMMENT ÇA MARCHE ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <SectionTag text="Processus" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-14">
              Comment inscrire votre enfant ?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue flex
                    items-center justify-center text-white font-bold text-lg">
                    {s.num}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                  <Icon name={s.icon} size={24} className="text-blue" />
                </div>
                  <h3 className="font-bold text-[#1C2833]">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. POURQUOI NOUS ─────────────────────────────────────── */}
      <section className="bg-[#0E4288] py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <SectionTag text="Pourquoi nous choisir" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-14
              max-w-xl">
              Ce qui rend Burkina STEM Academy unique
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {reasons.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex
                    items-center justify-center text-xl flex-shrink-0">
                    <Icon name={r.icon} size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{r.title}</h3>
                    <p className="text-[#D6EAF8] text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINAL ─────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-20">
        <div className="container-max section-padding">
          <ScrollReveal>
            <div className="bg-blue rounded-2xl p-10 lg:p-14
              flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Prêt à inscrire votre enfant ?
                </h2>
                <p className="text-[#D6EAF8]">
                  Contactez-nous dès aujourd'hui les places sont limitées.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-gold text-[#412402] font-bold px-8 py-4
                  rounded-xl hover:-translate-y-1 transition-transform
                  duration-200 whitespace-nowrap text-sm flex-shrink-0"
              >
                Inscrire mon enfant
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

export default Home 