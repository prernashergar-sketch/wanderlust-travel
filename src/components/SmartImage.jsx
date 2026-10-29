import { useState } from 'react'

// Shows a soft placeholder while loading and a gradient fallback if the image fails.
export default function SmartImage({ src, alt, className = '' }) {
  const [status, setStatus] = useState('loading')
  if (status === 'error') {
    return <div className={`img-fallback ${className}`} role="img" aria-label={alt}>{alt}</div>
  }
  return (
    <img
      src={src} alt={alt} loading="lazy"
      className={`smart-img ${status === 'loaded' ? 'is-loaded' : ''} ${className}`}
      onLoad={() => setStatus('loaded')}
      onError={() => setStatus('error')}
    />
  )
}
