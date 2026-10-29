import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import SmartImage from './SmartImage'

export default function Modal({ destination, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      // Simple focus trap: keep Tab inside the dialog
      const items = dialogRef.current.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')
      const first = items[0], last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  const { name, image, alt, description, highlights, tips, category } = destination
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
        <button ref={closeRef} className="modal-close" aria-label="Close details" onClick={onClose}><X /></button>
        <SmartImage src={image} alt={alt} className="modal-img" />
        <div className="modal-body">
          <span className="badge static">{category}</span>
          <h2 id="modal-title">{name}</h2>
          <p>{description}</p>
          <div className="modal-cols">
            <div><h3>Highlights</h3><ul>{highlights.map((h) => <li key={h}>{h}</li>)}</ul></div>
            <div><h3>Travel Tips</h3><ul>{tips.map((t) => <li key={t}>{t}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </div>
  )
}
