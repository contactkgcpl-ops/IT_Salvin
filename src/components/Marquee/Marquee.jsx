import { industries } from '../../data/siteData.js'

const Marquee = () => {
  const labels = industries.map((industry) => industry.title)

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...labels, ...labels].map((label, index) => (
          <span key={`${label}-${index}`}>{label}</span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
