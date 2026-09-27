import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
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

      {domain.skills.map((skill, i) => (
        <div className="skill-row" key={skill.name}>
          <div className="skill-row-top">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div
            className="skill-track"
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={skill.name}
          >
            <motion.div
              className="skill-fill"
              style={{ width: `${skill.level}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
            />
          </div>
        </div>
      ))}

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
          title="Six domaines, une vision globale de la sécurité."
          lead="De l’attaque à la gouvernance : une expertise transverse pour comprendre les menaces et y répondre de façon adaptée."
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
