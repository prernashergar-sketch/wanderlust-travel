import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'

const links = [
  ['Home', '#home'], ['Destinations', '#destinations'], ['Travel Tips', '#tips'],
  ['About', '#about'], ['Contact', '#contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <Compass size={26} aria-hidden="true" /> Wanderlust
        </a>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <ul id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
