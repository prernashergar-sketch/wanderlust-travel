import { ArrowDown } from 'lucide-react'
import { HERO_IMAGE } from '../data'

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ '--hero-img': `url(${HERO_IMAGE})` }}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Wanderlust — Explore the World</p>
        <h1>The World Is Waiting for You.</h1>
        <p className="hero-sub">Discover extraordinary places and plan your next unforgettable adventure.</p>
        <a href="#destinations" className="btn btn-primary">
          Explore Destinations <ArrowDown size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
