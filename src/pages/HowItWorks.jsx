import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'

const steps = [
  { num: '01', icon: 'Phone', title: 'Contactez-nous', color: '#1A74D2',
    desc: 'Appelez-nous ou remplissez le formulaire en ligne. Notre équipe vous répond dans les 24 heures.' },
  { num: '02', icon: 'GraduationCap', title: 'Choisissez une formation', color: '#03812E',
    desc: 'Nous vous guidons pour choisir la formation adaptée à l\'âge et aux intérêts de votre enfant.' },
  { num: '03', icon: 'CreditCard', title: 'Inscription & paiement', color: '#F7B51A',
    desc: 'Réglez les frais d\'inscription (10 000 FCFA) et de participation (50 000 FCFA). Place immédiatement réservée.' },
  { num: '04', icon: 'Rocket', title: 'C\'est parti !', color: '#0E4288',
    desc: 'Votre enfant rejoint sa classe et commence à apprendre avec des formateurs passionnés.' },
]

const faqs = [
  { q: 'À partir de quel âge peut-on inscrire son enfant ?',
    a: 'Dès 6 ans. Nous avons des programmes adaptés à chaque tranche d\'âge, du primaire au lycée.' },
  { q: 'Les formations ont-elles lieu pendant les vacances scolaires ?',
    a: 'Nous proposons des formations en année scolaire et des stages intensifs pendant les vacances.' },
  { q: 'Mon enfant peut-il changer de formation en cours de route ?',
    a: 'Oui. Contactez-nous et nous trouverons ensemble la meilleure solution pour votre enfant.' },
  { q: 'Y a-t-il du matériel à acheter ?',
    a: 'Non. Drones, kits robotique et ordinateurs sont fournis par l\'académie.' },
]

const HowItWorks = () => {
  return (
    <div className="pt-20">

      <PageHero
        tag="Processus"
        title="Inscrire votre enfant en 4 étapes simples."
        subtitle="Un processus clair, transparent, sans surprise du premier contact à la première séance."
      />

      {/* ── ÉTAPES ───────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase
              text-blue mb-4">Comment ça marche</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-14">
              Du premier contact à la première séance
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center
                    justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: s.color }}>
                    {s.num}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon name={s.icon} size={24} style={{ color: s.color }} />
                  </div>
                  <h3 className="font-bold text-[#1C2833]">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ───────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase
              text-blue mb-4">Tarifs</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-14">
              Transparent, sans frais cachés.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Inscription */}
            <ScrollReveal delay={0}>
              <div className="bg-[#F7F9FF] border border-gray-200 rounded-2xl p-8 h-full">
                <span className="inline-block bg-blue/10 text-blue text-xs
                  font-semibold px-3 py-1.5 rounded-full mb-6">
                  Une seule fois
                </span>
                <p className="text-[#1C2833] font-semibold mb-2">
                  Frais d'inscription
                </p>
                <p className="text-3xl font-bold text-blue">10 000 FCFA</p>
              </div>
            </ScrollReveal>

            {/* Participation */}
            <ScrollReveal delay={0.1}>
              <div className="bg-blue rounded-2xl p-8 h-full">
                <span className="inline-block bg-white/15 text-white text-xs
                  font-semibold px-3 py-1.5 rounded-full mb-6">
                  Par formation
                </span>
                <p className="text-[#D6EAF8] font-semibold mb-2">
                  Frais de participation
                </p>
                <p className="text-3xl font-bold text-white">50 000 FCFA</p>
              </div>
            </ScrollReveal>

            {/* Total */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gold/10 border-2 border-gold/40 rounded-2xl p-8 h-full">
                <p className="text-[#1C2833] font-semibold mb-2">
                  Total pour démarrer
                </p>
                <p className="text-3xl font-bold text-[#1C2833]">60 000 FCFA</p>
                <p className="text-gray-500 text-sm mt-2">
                  Inscription + 1ère formation
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-24">
        <div className="container-max section-padding">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase
              text-blue mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2833] mb-14">
              Questions fréquentes des parents
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 items-stretch ">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm h-full">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-blue flex items-center
                      justify-center text-white font-bold text-sm flex-shrink-0">
                      Q
                    </div>
                    <div>
                      <p className="font-semibold text-[#1C2833] mb-3">
                        {faq.q}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
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
                  Prêt à inscrire votre enfant ?
                </h2>
                <p className="text-[#D6EAF8]">
                  Contactez-nous dès aujourd'hui les places sont limitées.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <Link to="/contact"
                  className="bg-gold text-[#412402] font-bold px-6 py-3.5
                    rounded-xl hover:-translate-y-1 transition-transform
                    duration-200 text-sm">
                  Inscrire mon enfant
                </Link>
                <Link to="/contact"
                  className="bg-white/10 text-white border border-white/30
                    font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20
                    transition-colors duration-200 text-sm">
                  Nous appeler
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

export default HowItWorks