import CTA from '../components/CTA/CTA.jsx'
import Card from '../components/Card/Card.jsx'
import PageHero from '../components/Layout/PageHero.jsx'
import SectionHeader from '../components/Layout/SectionHeader.jsx'
import { timeline } from '../data/siteData.js'

const AboutPage = ({ navigate }) => (
  <>
    <PageHero
      tag="About Salvin"
      title="Built on trust. Grown on results."
      copy="15+ years of building industry-defining businesses across India and beyond."
    />
    <section className="section-pad">
      <div className="container three-grid">
        {[
          ['Our Mission', 'Build a future where diverse industries thrive together and create sustainable stakeholder value.'],
          ['Our Vision', "Become India's most trusted multi-industry conglomerate through integrity and innovation."],
          ['Our Values', 'Integrity, excellence, collaboration, sustainability, and client-first execution.'],
        ].map(([title, copy]) => (
          <Card className="glass-card value-card" key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </Card>
        ))}
      </div>
    </section>
    <section className="section-pad bg-light">
      <SectionHeader
        tag="Our Journey"
        title="From vision to conglomerate"
        copy="A story of strategic expansion, disciplined execution, and long-term thinking."
      />
      <div className="timeline">
        {timeline.map(([year, title, copy]) => (
          <article className="timeline-item" key={year}>
            <div className="timeline-dot">{year.slice(2)}</div>
            <div className="timeline-content">
              <div className="timeline-year">{year}</div>
              <h4>{title}</h4>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="section-pad">
      <div className="container stat-grid">
        {['15+ Years', '10+ Verticals', '800+ Team', '12 Markets'].map((item) => (
          <strong className="stat-large" key={item}>
            {item}
          </strong>
        ))}
      </div>
    </section>
    <section className="section-pad bg-light">
      <SectionHeader tag="Leadership" title="The minds behind Salvin" />
      <div className="container team-grid">
        {[
          ['RS', 'Rajiv Salvin', 'Founder & Chairman'],
          ['PD', 'Priya Desai', 'CEO, Hospitality & Events'],
          ['AK', 'Anand Kumar', 'Head, Pharmaceutical & Chemical'],
        ].map(([initials, name, role]) => (
          <article className="team-card" key={name}>
            <div className="team-avatar">{initials}</div>
            <h4>{name}</h4>
            <span>{role}</span>
          </article>
        ))}
      </div>
    </section>
    <CTA title="Join the Salvin story" navigate={navigate} />
  </>
)

export default AboutPage
