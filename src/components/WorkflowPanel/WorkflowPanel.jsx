import { automations } from '../../data/crmData.js'

const WorkflowPanel = () => {
  return (
    <section className="workflow-section" id="automation">
      <div className="workflow-copy">
        <p className="eyebrow">Automation layer</p>
        <h2>Rules that keep teams moving after every customer touch.</h2>
        <p>
          Salvin CRM blends ECERP-style lead-to-order coverage with Business Central-style
          operational context, so sales work links to inventory, invoice, service, and collection.
        </p>
      </div>
      <div className="workflow-list">
        {automations.map((item) => (
          <div className="workflow-item" key={item}>
            <span aria-hidden="true">OK</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkflowPanel
