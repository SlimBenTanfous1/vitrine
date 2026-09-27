import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

// Apparition douce au défilement : léger fondu + translation verticale.
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Component>
  )
}

export function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="section-lead">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}

export { ease }
