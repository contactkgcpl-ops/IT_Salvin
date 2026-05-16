import { industries } from '../../data/crmData.js'

const IndustrySuite = () => {
  return (
    <section className="industry-section">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Industry ready</p>
        <h2>Built for teams that sell complex products and repeat service.</h2>
      </div>
      <div className="industry-track">
        {industries.map((industry) => (
          <span key={industry}>{industry}</span>
        ))}
      </div>
    </section>
  )
}

export default IndustrySuite
