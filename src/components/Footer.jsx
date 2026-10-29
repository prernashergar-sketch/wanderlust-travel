import { Compass } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="logo light"><Compass size={24} aria-hidden="true" /> Wanderlust</p>
          <p className="tagline">Discover the world, one destination at a time.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#tips">Travel Tips</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <p className="copy">© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
    </footer>
  )
}
