import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/profile'
import { Reveal, SectionHead, ease } from './Reveal'

const categories = ['Tous', ...new Set(projects.map((p) => p.category))]

export function Projects() {
  const [filter, setFilter] = useState('Tous')
  const visible = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <SectionHead
          eyebrow="Projets"
          title="Réalisations & laboratoires"
          lead="Une sélection de projets personnels et professionnels illustrant ma pratique de la sécurité."
        />

        <Reveal className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {filter === cat && (
                <motion.span
                  layoutId="filter-bg"
                  className="filter-bg"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span>{cat}</span>
            </button>
          ))}
        </Reveal>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.a
                layout
                key={project.title}
                href={project.link}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease }}
              >
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <span className="project-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
