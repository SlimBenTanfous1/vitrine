import { motion } from 'motion/react'
import { BadgeCheck } from 'lucide-react'
import { certifications, frameworks } from '../data/profile'
import { Reveal, SectionHead, ease } from './Reveal'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHead
          eyebrow="Certifications"
          title="Certifications & référentiels"
        />
        <motion.div
          className="cert-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              className="cert-card"
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <div className="cert-icon">
                <BadgeCheck size={24} strokeWidth={1.8} />
              </div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-meta">
                  {cert.issuer}
                  {cert.year && ` · ${cert.year}`}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="frameworks">
          <div className="tools-label">Référentiels maîtrisés</div>
          <div className="tag-list">
            {frameworks.map((f) => (
              <span className="tag" key={f}>
                {f}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
