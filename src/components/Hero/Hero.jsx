import Background from '../Layout/Background.jsx'
import Button from '../Button/Button.jsx'
import Stats from '../Stats/Stats.jsx'

const FloatingCard = ({ label, detail }) => (
  <article className="fcard glass-card">
    <div className="fcard-icon">{label.slice(0, 2)}</div>
    <div>
      <strong>{label}</strong>
      <span>{detail}</span>
    </div>
  </article>
)

const Hero = ({ navigate }) => (
  <section className="hero">
    <Background />
    <div className="hero-inner">
      <div className="hero-badge">
        <span className="badge-dot" />
        Trusted across 10+ industry verticals
      </div>
      <h1>
        One platform.
        <br />
        <span className="gradient-text">Endless growth.</span>
      </h1>
      <p>
        Salvin Industry powers growth across food, hospitality, real estate, pharma, engineering, trading, events,
        and retail with precision, trust, and innovation.
      </p>
      <div className="hero-cta">
        <Button onClick={() => navigate('Services')}>Explore Services</Button>
        <Button className="btn-ghost" onClick={() => navigate('About')}>
          Our Story
        </Button>
      </div>
      <Stats />
    </div>
    <div className="floating-cards">
      <FloatingCard label="Hospitality" detail="Premium segment" />
      <FloatingCard label="Pharma" detail="Compliance first" />
      <FloatingCard label="Real Estate" detail="Commercial and residential" />
    </div>
  </section>
)

export default Hero
