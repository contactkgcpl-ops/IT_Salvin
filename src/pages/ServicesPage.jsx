import Button from '../components/Button/Button.jsx'
import CTA from '../components/CTA/CTA.jsx'
import PageHero from '../components/Layout/PageHero.jsx'
import { industries } from '../data/siteData.js'

const ServicesPage = ({ navigate }) => (
  <>
    <PageHero
      tag="Our Services"
      title="Diverse industries. One trusted partner."
      copy="From FMCG to pharmaceuticals, hospitality to heavy engineering, Salvin Industry delivers excellence at every scale."
    />
    <div className="service-pills">
      {industries.map((industry) => (
        <a href={`#${industry.id}`} key={industry.id}>
          {industry.title}
        </a>
      ))}
    </div>
    {industries.map((industry, index) => (
      <section className="industry-section" id={industry.id} key={industry.id}>
        <div className={`industry-inner${index % 2 ? ' reverse' : ''}`}>
          <div className="industry-content">
            <div className="section-tag">{industry.title}</div>
            <h2>{industry.heading}</h2>
            <p>{industry.copy}</p>
            <div className="industry-tags">
              {industry.tags.map((tag) => (
                <span className="itag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <Button onClick={() => navigate('Contact')}>Partner With Us</Button>
          </div>
          <div className="industry-visual glass-card">
            <span>{industry.icon}</span>
          </div>
        </div>
      </section>
    ))}
    <CTA title="Have a project in mind?" navigate={navigate} />
  </>
)

export default ServicesPage
