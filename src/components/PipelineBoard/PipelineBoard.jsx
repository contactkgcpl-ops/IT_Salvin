import { pipeline } from '../../data/crmData.js'

const PipelineBoard = () => {
  return (
    <section className="pipeline-section" id="pipeline">
      <div className="section-heading">
        <p className="eyebrow">Live pipeline</p>
        <h2>Lead, quotation, order, and revenue visibility for managers.</h2>
      </div>
      <div className="pipeline-board">
        {pipeline.map((column) => (
          <article className="pipeline-column" key={column.stage}>
            <div className="pipeline-head">
              <span style={{ backgroundColor: column.color }} />
              <h3>{column.stage}</h3>
              <strong>{column.amount}</strong>
            </div>
            {column.deals.map((deal) => (
              <div className="deal-card" key={deal}>
                <span>{deal}</span>
                <small>Follow-up due today</small>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

export default PipelineBoard
