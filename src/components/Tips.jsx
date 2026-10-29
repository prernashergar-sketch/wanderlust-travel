import { Backpack, Wallet, Heart, Map } from 'lucide-react'
import { tips } from '../data'

const icons = { Backpack, Wallet, Heart, Map }

export default function Tips() {
  return (
    <section id="tips" className="section tinted">
      <div className="container">
        <p className="eyebrow dark">Travel Tips</p>
        <h2>Travel smarter, wander further</h2>
        <div className="tips-grid">
          {tips.map((t) => {
            const Icon = icons[t.icon]
            return (
              <article key={t.title} className="tip">
                <span className="tip-icon"><Icon aria-hidden="true" /></span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
