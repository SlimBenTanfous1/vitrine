import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check } from 'lucide-react'
import { skillDomains } from '../data/profile'
import { Icon } from './Icon'
import { Reveal, SectionHead, ease } from './Reveal'

function SkillPanel({ domain }) {
  return (
    <motion.div
      key={domain.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease }}
    >
      <div className="skill-panel-head">
        <div className="skill-panel-icon">
          <Icon name={domain.icon} size={26} />
        </div>
        <div>
          <h3>{domain.title}</h3>
          <p>{domain.summary}</p>
        </div>
      </div>

      <ul className="skill-points">
        {domain.points.map((point, i) => (
          <motion.li
            key={point}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease }}
          >
            <span className="point-check">
              <Check size={14} strokeWidth={2.4} />
            </span>
            {point}
          </motion.li>
        ))}
      </ul>

      <div className="tools">
        <div className="tools-label">Outils & référentiels</div>
        <div className="tag-list">
          {domain.tools.map((tool, i) => (
            <motion.span
              className="tag"
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  const [activeId, setActiveId] = useState(skillDomains[0].id)
  const active = skillDomains.find((d) => d.id === activeId)

  return (
    <section id="skills" className="section-alt">
      <div className="container">
        <SectionHead
          eyebrow="Compétences"
          title="Six domaines, de la détection au durcissement."
          lead="Des compétences mises en pratique en production et en projets personnels, du SOC aux pipelines CI/CD."
        />

        <div className="skills-layout">
          <Reveal className="skill-tabs-wrap">
            <div className="skill-tabs" role="tablist" aria-label="Domaines de compétences">
              {skillDomains.map((domain) => (
                <button
                  key={domain.id}
                  role="tab"
                  aria-selected={activeId === domain.id}
                  className={`skill-tab ${activeId === domain.id ? 'active' : ''}`}
                  onClick={() => setActiveId(domain.id)}
                >
                  {activeId === domain.id && (
                    <motion.span
                      layoutId="skill-tab-bg"
                      className="tab-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="tab-icon">
                    <Icon name={domain.icon} size={18} />
                  </span>
                  <span>{domain.title}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="skill-panel" role="tabpanel">
              <AnimatePresence mode="wait">
                <SkillPanel key={active.id} domain={active} />
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
