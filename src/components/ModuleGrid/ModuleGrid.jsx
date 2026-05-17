import { modules } from '../../data/crmData.js'

const ModuleGrid = () => {
  return (
    <section className="section-block" id="modules">
      <div className="section-heading">
        <p className="eyebrow">CRM modules</p>
        <h2>Everything your team needs to capture, convert, and retain customers.</h2>
      </div>
      <div className="module-grid">
        {modules.map((module, index) => (
          <article className="module-card" key={module.name}>
            <div className="module-index">{String(index + 1).padStart(2, '0')}</div>
            <div>
              <span>{module.tag}</span>
              <h3>{module.name}</h3>
              <p>{module.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ModuleGrid
