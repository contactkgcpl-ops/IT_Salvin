import { stats } from '../../data/siteData.js'

const Stats = () => (
  <div className="hero-stats">
    {stats.map(([value, label]) => (
      <div className="stat-item" key={label}>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    ))}
  </div>
)

export default Stats
