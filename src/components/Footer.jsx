import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name} — {profile.role}
        </span>
        <a href="#hero" className="back-top">
          Retour en haut <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}
