import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import Icon from '../components/ui/Icon'

const formations = [
  'Programmation & Codage',
  'Robotique & Électronique',
  'Ingénierie & Projets STEM',
  'Créativité & Design',
  'Anglais Ludique',
  'Jeux Éducatifs & Défis Technos',
  'Initiation aux métiers de drones',
]

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    phone: '',
    from_email: '',
    formation: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ from_name: '', phone: '', from_email: '', formation: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const inputClass = `w-full border border-gray-200 rounded-xl px-4 py-3
    text-sm text-[#1C2833] placeholder-gray-400 focus:outline-none
    focus:border-blue focus:ring-1 focus:ring-blue transition-colors duration-200`

  return (
    <div className="pt-20">

      <PageHero
        tag="Contact"
        title="Parlons de l'avenir de votre enfant."
        subtitle="Nous sommes disponibles pour répondre à toutes vos questions."
      />

      {/* ── BLOC APPEL ───────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-10">
        <div className="container-max section-padding">
          <ScrollReveal>
            <div className="bg-blue rounded-2xl p-8 flex flex-col md:flex-row
              items-center justify-between gap-6">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex
                  items-center justify-center text-2xl flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-red" />
                </div>
                <div>
                  <p className="text-[#D6EAF8] text-sm mb-1">
                    Appelez-nous directement
                  </p>
                  <p className="text-white font-bold text-2xl">
                    +226 67 01 13 20
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+22667011320"
                  className="bg-gold text-[#412402] font-bold px-3 py-3.5
                    rounded-xl hover:-translate-y-1 transition-transform
                    duration-200 text-sm text-center"
                >
                  <Icon name="Phone" size={20} className="text-red" /> Appeler maintenant
                </a>
                <a
                  href="tel:+22666350415"
                  className="bg-white/10 text-white border border-white/30
                    font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20
                    transition-colors duration-200 text-sm text-center"
                >
                  +226 66 35 04 15
                </a>
              </div>

            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-center text-gray-400 text-sm mt-4">
              Ou écrivez-nous : burkinastemacademy@gmail.com
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FORMULAIRE + INFOS ───────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-max section-padding grid lg:grid-cols-2 gap-12">

          {/* Formulaire */}
          <ScrollReveal>
            <div className="bg-white border border-gray-100 rounded-2xl p-8
              shadow-sm">
              <h2 className="text-2xl font-bold text-[#1C2833] mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Nous vous répondons dans les 24 heures.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nom + Téléphone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#1C2833]
                      block mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="Ex : Amadou Traoré"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#1C2833]
                      block mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+226 XX XX XX XX"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold text-[#1C2833]
                    block mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Formation souhaitée */}
                <div>
                  <label className="text-xs font-semibold text-[#1C2833]
                    block mb-2">
                    Formation souhaitée
                  </label>
                  <select
                    name="formation"
                    value={form.formation}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Choisir une formation...</option>
                    {formations.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-[#1C2833]
                    block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message ici..."
                    rows={4}
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-blue text-white font-bold py-4 rounded-xl
                    hover:-translate-y-0.5 transition-transform duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message '}
                </button>

                {/* Feedback */}
                {status === 'success' && (
                  <p className="text-green-600 text-sm font-semibold text-center
                    bg-green-50 py-3 rounded-xl">
                    ✓ Message envoyé ! Nous vous répondons dans les 24 heures.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm font-semibold text-center
                    bg-red-50 py-3 rounded-xl">
                    ✗ Une erreur s'est produite. Appelez-nous directement.
                  </p>
                )}

              </form>
            </div>
          </ScrollReveal>

          {/* Infos pratiques */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#0E4288] rounded-2xl p-8 h-full">
              <h2 className="text-xl font-bold text-white mb-2">
                Informations pratiques
              </h2>
              <p className="text-[#D6EAF8] text-sm mb-8">
                Toutes les informations pour nous joindre.
              </p>

              <div className="h-px bg-white/10 mb-8" />

              <div className="flex flex-col gap-8">
                {[
                  { icon: 'Phone', label: 'TÉLÉPHONE',
                    value: '+226 67 01 13 20\n+226 66 35 04 15' },
                  { icon: 'Mail', label: 'EMAIL',
                    value: 'burkinastemacademy@gmail.com' },
                  { icon: 'MapPin', label: 'ADRESSE',
                    value: 'Koudougou, Burkina Faso\nSiège : à 50m de l\'école sud,\nen face de la station OTAM' },
                  { icon: 'Clock', label: 'HORAIRES',
                    value: 'Lundi – Samedi : 8h00 – 18h00' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 flex
                      items-center justify-center text-lg flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest
                        text-[#D6EAF8] uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-semibold
                        whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/10 my-8" />

              {/* Réseaux sociaux */}
              <p className="text-xs font-semibold tracking-widest text-[#D6EAF8]
                uppercase mb-4">
                Suivez-nous
              </p>
              <div className="flex gap-3">
                {['Facebook'].map((r) => (
                  <a key={r} href="https://www.facebook.com/profile.php?id=61590442866529"
                    className="text-xs font-semibold px-3 py-2 rounded-lg
                      bg-white/8 border border-white/15 text-white
                      hover:bg-white/15 transition-colors duration-200">
                    {r}
                  </a>
                ))}
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  )
}

export default Contact