import heroAsset from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Sales, service, and customer CRM</p>
        <h1>Run every lead, deal, ticket, and follow-up from one CRM cockpit.</h1>
        <p className="hero-lede">
          Salvin CRM gives teams a clear command center for enquiry capture, customer history,
          sales pipeline, quotations, field visits, service tickets, and ERP-ready reporting.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#modules">
            Explore Modules
          </a>
          <a className="secondary-button" href="#pipeline">
            View Pipeline
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Salvin CRM dashboard preview">
        <img className="hero-orbit" src={heroAsset} alt="" />
        <div className="crm-console">
          <div className="console-topbar">
            <strong>Salvin CRM workspace</strong>
            <span>Live</span>
          </div>
          <div className="crm-workspace">
            <aside className="crm-sidebar">
              <span className="active">Dashboard</span>
              <span>Leads</span>
              <span>Pipeline</span>
              <span>Service</span>
              <span>Reports</span>
            </aside>
            <div className="crm-main">
              <div className="console-grid">
                <div className="console-card console-card-large">
                  <small>New enquiries today</small>
                  <strong>37 leads</strong>
                  <div className="lead-source-list">
                    <span>
                      <b>Website</b> 14
                    </span>
                    <span>
                      <b>WhatsApp</b> 11
                    </span>
                    <span>
                      <b>Field team</b> 8
                    </span>
                    <span>
                      <b>Calls</b> 4
                    </span>
                  </div>
                </div>
                <div className="console-card">
                  <small>Open pipeline</small>
                  <strong>Rs 1.54Cr</strong>
                </div>
                <div className="console-card dark-card">
                  <small>Won this month</small>
                  <strong>Rs 52.7L</strong>
                </div>
                <div className="console-card activity-card">
                  <small>Next follow-up</small>
                  <strong>Apex Motors</strong>
                  <p>Quote reminder due at 11:30 AM</p>
                </div>
                <div className="console-card service-card">
                  <small>Service queue</small>
                  <strong>12 tickets</strong>
                  <p>4 high-priority installation issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
