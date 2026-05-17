import { industries, integrations } from '../../data/crmData.js'

const IndustrySuite = () => {
  return (
    <section className="industry-section" id="integrations">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Integrations and industries</p>
        <h2>Built for complex selling, repeat service, and connected back-office work.</h2>
      </div>
      <div className="industry-layout">
        <div className="integration-cloud" aria-label="Integration options">
          {integrations.map((integration) => (
            <span key={integration}>{integration}</span>
          ))}
        </div>
        <div className="industry-track">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustrySuite
