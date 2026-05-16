import { reportRows } from '../../data/crmData.js'

const InsightPanel = () => {
  return (
    <section className="insight-section" id="reports">
      <div className="section-heading">
        <p className="eyebrow">Decision reports</p>
        <h2>Know what changed before month-end meetings begin.</h2>
      </div>
      <div className="insight-layout">
        <div className="radar-panel">
          <div className="radar-ring ring-one" />
          <div className="radar-ring ring-two" />
          <div className="radar-ring ring-three" />
          <span className="radar-dot dot-one" />
          <span className="radar-dot dot-two" />
          <span className="radar-dot dot-three" />
          <strong>360</strong>
          <small>Customer signal</small>
        </div>
        <div className="report-table">
          {reportRows.map((row) => (
            <div className="report-row" key={row.label}>
              <span>{row.label}</span>
              <strong>{row.value}</strong>
              <em>{row.trend}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightPanel
