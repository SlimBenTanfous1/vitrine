import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, ChevronDown, Download, Lock, MapPin, Network, Radar, ShieldCheck } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './Icon'
import { ease } from './Reveal'

const titleWords = [
  { text: 'Sécuriser', accent: false },
  { text: 'vos', accent: false },
  { text: 'systèmes,', accent: false },
  { text: 'sereinement.', accent: true },
]

const chips = [
  { label: 'Pentest', icon: Radar, style: { top: '4%', left: '8%' }, alt: false, delay: 0 },
  { label: 'Cloud Security', icon: Network, style: { top: '22%', right: '-4%' }, alt: true, delay: 0.8 },
  { label: 'ISO 27001', icon: ShieldCheck, style: { bottom: '14%', left: '-6%' }, alt: true, delay: 1.6 },
  { label: 'IAM & Zero Trust', icon: Lock, style: { bottom: '2%', right: '6%' }, alt: false, delay: 2.4 },
]

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease }}
      aria-hidden="true"
    >
      <motion.div
        className="orbit"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />
      <div className="orbit orbit-2" />

      <motion.div
        className="shield-card"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="56%" viewBox="0 0 64 64" fill="none">
          <motion.path
            d="M32 6l20 8v14c0 13-8.6 23.6-20 27-11.4-3.4-20-14-20-27V14l20-8z"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.6, ease: 'easeInOut' }}
          />
          <motion.path
            d="M23 32l6.5 6.5L42 26"
            stroke="var(--accent-2)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 2, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>

      {chips.map(({ label, icon: ChipIcon, style, alt, delay }, i) => (
        <motion.div
          key={label}
          className="orbit-chip-wrap"
          style={style}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 + i * 0.15, ease }}
        >
          <motion.div
            className={`orbit-chip ${alt ? 'alt' : ''}`}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="chip-icon">
              <ChipIcon size={15} />
            </span>
            {label}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-bg">
        <motion.div
          className="hero-blob"
          style={{ y: y1, width: 520, height: 520, top: -160, right: -120, background: 'var(--accent-soft)' }}
        />
        <motion.div
          className="hero-blob"
          style={{ y: y2, width: 420, height: 420, bottom: -140, left: -120, background: 'var(--accent-2-soft)' }}
        />
      </div>

      <motion.div className="container hero-grid" style={{ opacity: contentOpacity }}>
        <div>
          <motion.div
            className="status-chip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="status-dot" />
            {profile.availability}
          </motion.div>

          <h1 className="hero-title">
            {titleWords.map((word, i) => (
              <span key={word.text} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
                <motion.span
                  className={`word ${word.accent ? 'accent' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease }}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            {profile.name} — {profile.role}
          </motion.p>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
          >
            <a href="#contact" className="btn btn-primary">
              Me contacter <ArrowRight size={17} />
            </a>
            <a href={profile.cvUrl} className="btn btn-ghost" download>
              Télécharger le CV <Download size={17} />
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            <span>
              <MapPin size={15} /> {profile.location}
            </span>
            <span className="hero-socials">
              <a className="icon-btn" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a className="icon-btn" href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </span>
          </motion.div>
        </div>

        <HeroVisual />
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-hint"
        aria-label="Faire défiler vers la suite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
