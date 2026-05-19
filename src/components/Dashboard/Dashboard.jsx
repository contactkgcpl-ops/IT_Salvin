const Dashboard = () => (
  <div className="dashboard-mockup glass-card">
    <div className="dash-header">
      <span />
      <span />
      <span />
      <strong>Salvin Operations Dashboard</strong>
    </div>
    <div className="dash-stats-row">
      <div>
        <strong>Rs 240Cr</strong>
        <span>Annual revenue</span>
      </div>
      <div>
        <strong>10+</strong>
        <span>Business units</span>
      </div>
    </div>
    <div className="bar-chart">
      {[55, 72, 48, 88, 63, 41].map((height, index) => (
        <i key={height + index} style={{ height: `${height}%` }} />
      ))}
    </div>
    <div className="dash-tags">
      <span>Real estate Q4 surge</span>
      <span>Hospitality expanding</span>
    </div>
  </div>
)

export default Dashboard
