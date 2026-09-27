import { motion } from 'motion/react'
import { approach } from '../data/profile'
import { Reveal, SectionHead, ease } from './Reveal'

export function Approach() {
  return (
    <section id="approach">
      <div className="container">
        <SectionHead
          eyebrow="Méthode"
          title="Une démarche structurée, de l’analyse à l’amélioration continue."
        />
        <div className="approach-grid">
          <motion.div
            className="approach-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease }}
          />
          {approach.map((item, i) => (
            <Reveal key={item.step} delay={0.15 + i * 0.12} className="approach-card">
              <div className="approach-step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
