import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import { Check, GraduationCap } from 'lucide-react'
import { education, experience } from '../data/profile'
import { Reveal, SectionHead } from './Reveal'

export function Experience() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 60%'],
  })

  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <SectionHead eyebrow="Parcours" title="Expérience professionnelle" />

        <div className="timeline-wrap">
          <div className="timeline" ref={timelineRef}>
            <div className="timeline-track" />
            <motion.div className="timeline-progress" style={{ scaleY: scrollYProgress }} />

            {experience.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-period">{item.period}</div>
                <h3>{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p>{item.description}</p>
                {item.highlights?.length > 0 && (
                  <div className="highlights">
                    {item.highlights.map((h) => (
                      <span className="highlight" key={h}>
                        <Check size={14} /> {h}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal as="aside" delay={0.15} className="side-card">
              <h3>
                <GraduationCap size={20} /> Formation
              </h3>
              {education.map((edu) => (
                <div key={edu.title}>
                  <div className="edu-period">{edu.period}</div>
                  <div className="edu-title">{edu.title}</div>
                  <div className="edu-school">{edu.company}</div>
                </div>
              ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
