import { automations, workflowSteps } from '../../data/crmData.js'

const WorkflowPanel = () => {
  return (
    <section className="workflow-section" id="automation">
      <div className="workflow-copy">
        <p className="eyebrow">Automation layer</p>
        <h2>Follow-ups, approvals, and service work move without manual chasing.</h2>
        <p>
          Salvin CRM blends ECERP-style lead-to-order coverage with Business Central-style
          operational context, so sales work links to inventory, invoice, service, and collection.
        </p>
        <div className="workflow-map">
          {workflowSteps.map((step) => (
            <article key={step.label}>
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </article>
          ))}
        </div>
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
