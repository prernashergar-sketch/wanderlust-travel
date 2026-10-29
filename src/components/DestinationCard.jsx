import SmartImage from './SmartImage'

export default function DestinationCard({ destination, onView }) {
  const { name, image, alt, short, category } = destination
  return (
    <article className="card">
      <div className="card-img-wrap">
        <SmartImage src={image} alt={alt} />
        <span className="badge">{category}</span>
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p>{short}</p>
        <button className="btn btn-outline" onClick={() => onView(destination)}
          aria-label={`View details for ${name}`}>View Details</button>
      </div>
    </article>
  )
}
