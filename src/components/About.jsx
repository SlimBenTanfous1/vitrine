import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { profile } from '../data/profile'
import { Reveal, SectionHead } from './Reveal'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <SectionHead eyebrow="À propos" title="Une sécurité claire, mesurable et utile au métier." />
          <div className="about-text">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="stats-grid">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="stat">
              <div className="stat-value">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
