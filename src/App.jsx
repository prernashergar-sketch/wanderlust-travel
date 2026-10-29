import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Explorer from './components/Explorer'
import Modal from './components/Modal'
import Tips from './components/Tips'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Explorer onView={setSelected} />
        <Tips />
        <About />
        <Contact />
      </main>
      <Footer />
      {selected && <Modal destination={selected} onClose={closeModal} />}
    </>
  )
}
