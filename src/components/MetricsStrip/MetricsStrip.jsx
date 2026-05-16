import { metrics } from '../../data/crmData.js'

const MetricsStrip = () => {
  return (
    <section className="metrics-strip" id="overview" aria-label="Salvin CRM performance metrics">
      {metrics.map((metric) => (
        <article className="metric-tile" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <p>{metric.detail}</p>
        </article>
      ))}
    </section>
  )
}

export default MetricsStrip
