import ScrollReveal from '../components/ui/ScrollReveal'
import { team, values } from '../data/team'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import ImageSlider from '../components/ui/ImageSlider'
import Icon from '../components/ui/Icon'

// Ajoute ces données en dehors du composant
const storyImages = [
  '/images/story/story1.jpg',
  '/images/story/story2.jpg',
  '/images/story/story3.jpg',
  '/images/story/story4.jpg',
  '/images/story/story5.jpg',
]

const SectionTag = ({ text, light = false }) => (
  <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-4
    ${light ? 'text-gold' : 'text-blue'}`}>
    {text}
  </p>
)

const About = () => {
  return (
    <div className="pt-20">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <PageHero
        tag="À propos"
        title="Former les innovateurs de demain au Burkina.     "
        subtitle="Burkina STEM Academy est née d'une conviction : chaque jeune burkinabè mérite d'accéder aux compétences technologiques du futur."
        />
 
      {/* ── 2. MISSION & VISION ──────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-24">
        <div className="container-max section-padding grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <ScrollReveal delay={0}>
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
              <div className="w-14 h-14 rounded-xl bg-blue/12 flex items-center
                justify-center text-2xl mb-6">
                <Icon name="Target" size={24} className="text-blue" />
              </div>
              <h2 className="text-xl font-bold text-[#1C2833] mb-4">
                Notre Mission
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {/* À compléter par le Directeur */}
                Démocratiser l'accès aux technologies STEM pour tous les jeunes
                de 6 à 18 ans au Burkina Faso, à travers des formations
                pratiques et accessibles.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#0E4288] rounded-2xl p-8 h-full">
              <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center
                justify-center text-2xl mb-6">
                <Icon name="Telescope" size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">
                Notre Vision
              </h2>
              <p className="text-[#D6EAF8] leading-relaxed">
                {/* À compléter par le Directeur */}
                Devenir la référence en formation technologique pour la jeunesse
                burkinabè et africaine, en formant les innovateurs et leaders
                de demain.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── 3. NOTRE HISTOIRE ────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <SectionTag text="Notre histoire" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-14
              max-w-xl">
              Pourquoi nous avons créé Burkina STEM Academy
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Slider gauche */}
            <ScrollReveal>
              <ImageSlider images={storyImages} height="h-[420px]" />
            </ScrollReveal>

            {/* Timeline droite */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-1.5 bg-gold rounded-full" />
                <h3 className="text-2xl font-bold text-[#1C2833]">
                  Notre histoire
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Dans la région de Nando, les opportunités pour les jeunes de découvrir
                  et de développer des compétences pratiques en robotique, systèmes
                  embarqués, intelligence artificielle, électronique, programmation et
                  technologie des drones sont extrêmement limitées.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  La plupart des établissements scolaires continuent de privilégier
                  l'enseignement théorique en raison du manque de laboratoires,
                  d'équipements et d'instructeurs qualifiés nécessaires pour dispenser
                  une formation pratique en ingénierie.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  En tant qu'ingénieur électricien diplômé du BIT, nous avons décidé
                  d'apporter une solution à ce problème très crucial.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center
                    justify-center">
                    <Icon name="GraduationCap" size={20} className="text-blue" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C2833] text-sm">
                      Fondateur Burkina STEM Academy
                    </p>
                    <p className="text-gray-400 text-xs">Ingénieur électricien, BIT</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 4. NOS VALEURS ───────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <SectionTag text="Nos valeurs" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-14">
              Ceux en quoi nous croyons
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 0.1}>
            <div className="bg-white rounded-2xl p-6 shadow-sm
            hover:-translate-y-1 transition-transform duration-300 overflow-hidden">

            {/* Barre colorée EN PREMIER */}
            <div className="h-1.5 -mx-6 -mt-6 mb-6"
                style={{ backgroundColor: v.color }} />

            {/* Ensuite l'icône */}
            <div className="w-12 h-12 rounded-xl flex items-center
                justify-center text-xl mb-4"
                style={{ backgroundColor: v.color + '20' }}>
                <Icon name={v.icon} size={24} className="text-blue" />
            </div>

                <h3 className="font-bold text-[#1C2833] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ÉQUIPE ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <SectionTag text="Notre équipe" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-4">
              Les personnes derrière<br />Burkina STEM Academy
            </h2>
            <p className="text-gray-500 mb-14 max-w-lg">
              Des passionnés de technologie engagés pour la jeunesse burkinabè.
            </p>
          </ScrollReveal>

          <div className={`grid gap-8 justify-center
            ${team.length <= 2 
              ? 'md:grid-cols-2 max-w-2xl mx-auto' 
              : 'md:grid-cols-2 lg:grid-cols-4'}`}>
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.1} className={team.length < 4 ? 'lg:col-start-auto' : ''}>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center
                  hover:-translate-y-1 transition-transform duration-300">

                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    {member.photo
                      ? <img
                          src={member.photo}
                          alt={member.name ?? member.role}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      : <div className="w-20 h-20 rounded-full bg-blue/15
                          flex items-center justify-center text-3xl">
                          
                        </div>
                    }
                  </div>

                  {/* Infos */}
                  <h3 className="font-bold text-[#1C2833] mb-1">
                    {member.name ?? '[ Nom à compléter ]'}
                  </h3>
                  <p className="text-blue text-sm font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs">{member.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINAL ─────────────────────────────────────────── */}
      <section className="bg-[#0E4288] py-20">
        <div className="container-max section-padding">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center
              justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Vous souhaitez en savoir plus ?
                </h2>
                <p className="text-[#D6EAF8]">
                  Contactez-nous nous répondons à toutes vos questions.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <Link
                  to="/formations"
                  className="bg-gold text-[#412402] font-bold px-6 py-3.5
                    rounded-xl hover:-translate-y-1 transition-transform
                    duration-200 text-sm"
                >
                  Voir les formations
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
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

export default About