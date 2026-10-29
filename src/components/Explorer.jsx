import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { destinations, CATEGORIES } from '../data'
import DestinationCard from './DestinationCard'

export default function Explorer({ onView }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return destinations.filter((d) =>
      (category === 'All' || d.category === category) && d.name.toLowerCase().includes(q))
  }, [query, category])

  return (
    <section id="destinations" className="section">
      <div className="container">
        <p className="eyebrow dark">Destinations</p>
        <h2>Where to next?</h2>
        <div className="controls">
          <div className="search">
            <Search size={18} aria-hidden="true" />
            <label htmlFor="search" className="sr-only">Search destinations by name</label>
            <input id="search" type="search" placeholder="Search destinations..."
              value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="filters" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button key={c} className={`chip ${category === c ? 'active' : ''}`}
                aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>
            ))}
          </div>
        </div>
        <p className="sr-only" aria-live="polite">{visible.length} destinations shown</p>
        {visible.length ? (
          <div className="grid">
            {visible.map((d) => <DestinationCard key={d.id} destination={d} onView={onView} />)}
          </div>
        ) : (
          <div className="empty">
            <h3>No destinations found</h3>
            <p>Try a different search or choose another category. The world is big!</p>
            <button className="btn btn-outline" onClick={() => { setQuery(''); setCategory('All') }}>Reset filters</button>
          </div>
        )}
      </div>
    </section>
  )
}
