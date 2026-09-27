import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Copy, Mail, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './Icon'
import { Reveal, SectionHead } from './Reveal'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  // Sans backend : ouvre le client mail avec le message pré-rempli.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <div>
            <SectionHead
              eyebrow="Contact"
              title="Parlons de la sécurité de votre projet."
              lead="Audit, accompagnement ou opportunité professionnelle : je réponds généralement sous 48 heures."
            />
            <div className="contact-list">
              <button className="contact-item" onClick={copyEmail}>
                <span className="ci-icon">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="ci-label">E-mail</span>
                  <br />
                  <span className="ci-value">{profile.email}</span>
                </span>
                <span className="ci-action">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'ok' : 'copy'}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? 'Copié' : 'Copier'}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>
              <a className="contact-item" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                <span className="ci-icon">
                  <LinkedinIcon />
                </span>
                <span>
                  <span className="ci-label">LinkedIn</span>
                  <br />
                  <span className="ci-value">Voir le profil</span>
                </span>
              </a>
              <a className="contact-item" href={profile.socials.github} target="_blank" rel="noreferrer">
                <span className="ci-icon">
                  <GithubIcon />
                </span>
                <span>
                  <span className="ci-label">GitHub</span>
                  <br />
                  <span className="ci-value">Voir les dépôts</span>
                </span>
              </a>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Nom</label>
                <input id="name" required value={form.name} onChange={update('name')} autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" required value={form.message} onChange={update('message')} />
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer le message <Send size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
