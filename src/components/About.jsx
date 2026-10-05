import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { profile } from '../data/profile'
import { Reveal, SectionHead } from './Reveal'

function Counter({ value, decimals = 0, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <SectionHead eyebrow="À propos" title="De l’infrastructure au SOC, une sécurité concrète." />
          <div className="about-text">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25} className="languages">
            <div className="tools-label">Langues</div>
            <div className="tag-list">
              {profile.languages.map((lang) => (
                <span className="tag" key={lang.name}>
                  {lang.name} <strong>{lang.level}</strong>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="stats-grid">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="stat">
              <div className="stat-value">
                <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
