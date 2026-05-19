import Button from '../components/Button/Button.jsx'
import CTA from '../components/CTA/CTA.jsx'
import Card from '../components/Card/Card.jsx'
import Dashboard from '../components/Dashboard/Dashboard.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Marquee from '../components/Marquee/Marquee.jsx'
import SectionHeader from '../components/Layout/SectionHeader.jsx'
import { industries, testimonials } from '../data/siteData.js'

const ServicesOverview = ({ navigate }) => (
  <section className="section-pad">
    <SectionHeader
      tag="What We Do"
      title="Built for every industry. Designed for growth."
      copy="From raw materials to refined experiences, Salvin Industry operates with precision across diverse sectors."
    />
    <div className="container services-grid">
      {industries.map((industry) => (
        <Card className="service-card" key={industry.id}>
          <div className="service-icon-wrap">{industry.icon}</div>
          <h3>{industry.title}</h3>
          <p>{industry.copy}</p>
          <button type="button" onClick={() => navigate('Services')}>
            Learn more
          </button>
        </Card>
      ))}
    </div>
  </section>
)

const WhySalvin = ({ navigate }) => (
  <section className="section-pad bg-light">
    <div className="container why-inner">
      <div>
        <div className="section-tag">Why Salvin</div>
        <h2 className="section-title">The conglomerate advantage</h2>
        <p className="section-sub">
          Our diversified portfolio is strategic synergy. When industries interconnect, value multiplies.
        </p>
        <div className="feature-list">
          {[
            ['Cross-industry synergies', 'F&B supports hospitality. Chemical supports pharma. Everything compounds.'],
            ['Compliance first', 'Every operation upholds high local and international standards.'],
            ['Proven execution', '500+ projects across sectors with measurable outcomes.'],
          ].map(([title, copy]) => (
            <article className="feature-item" key={title}>
              <span>OK</span>
              <div>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <Button onClick={() => navigate('About')}>Our Story</Button>
      </div>
      <Dashboard />
    </div>
  </section>
)

const Workflow = () => (
  <section className="section-pad">
    <SectionHeader
      tag="Our Process"
      title="How Salvin delivers"
      copy="A streamlined approach that transforms opportunity into operational excellence."
    />
    <div className="container workflow-steps">
      {['Discovery', 'Strategy', 'Execution', 'Scale'].map((step, index) => (
        <article className="wstep" key={step}>
          <div className="wstep-num">{String(index + 1).padStart(2, '0')}</div>
          <h4>{step}</h4>
          <p>{['Analyze opportunity', 'Plan with data', 'Execute precisely', 'Optimize continuously'][index]}</p>
        </article>
      ))}
    </div>
  </section>
)

const Testimonials = () => (
  <section className="section-pad bg-light">
    <SectionHeader tag="Client Stories" title="What our partners say" />
    <div className="container testi-grid">
      {testimonials.map(([name, role, quote]) => (
        <Card className="testi-card glass-card" key={name}>
          <div className="testi-stars">★★★★★</div>
          <p>"{quote}"</p>
          <strong>{name}</strong>
          <span>{role}</span>
        </Card>
      ))}
    </div>
  </section>
)

const HomePage = ({ navigate }) => (
  <>
    <Hero navigate={navigate} />
    <Marquee />
    <ServicesOverview navigate={navigate} />
    <WhySalvin navigate={navigate} />
    <Workflow />
    <Testimonials />
    <CTA title="Ready to partner with Salvin?" navigate={navigate} />
  </>
)

export default HomePage
