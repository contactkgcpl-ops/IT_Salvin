import { useEffect, useMemo, useState } from 'react'
import './App.css'
import SalvinLogo from './assets/salvin_logo.jpeg'

const pages = ['Home', 'Services', 'About', 'Portfolio', 'Contact']

const industries = [
  {
    id: 'food',
    icon: 'F&B',
    title: 'Food & Beverages',
    heading: 'From farm to premium table',
    copy: 'End-to-end supply chains, distribution networks, and premium brand development for hospitality, modern retail, and institutional clients.',
    tags: ['Supply chain', 'Brand development', 'FSSAI compliance', 'Cold chain', 'HORECA'],
  },
  {
    id: 'hospitality',
    icon: 'HOT',
    title: 'Hospitality',
    heading: 'World-class guest experiences',
    copy: 'Hotel management, resort development, operations consulting, revenue management, and staff training for stronger guest outcomes.',
    tags: ['Hotel management', 'Resorts', 'Revenue ops', 'F&B operations', 'Training'],
  },
  {
    id: 'events',
    icon: 'EVT',
    title: 'Events & Exhibition',
    heading: 'Unforgettable brand moments',
    copy: 'End-to-end event management and exhibition design for trade shows, corporate launches, and high-visibility brand experiences.',
    tags: ['Trade shows', 'Corporate events', 'Exhibition design', 'Event tech', 'Logistics'],
  },
  {
    id: 'trading',
    icon: 'TRD',
    title: 'Trading',
    heading: 'Global commodity intelligence',
    copy: 'International commodity trading, procurement, negotiations, import and export compliance, and transparent market connections.',
    tags: ['Commodity trading', 'Import/export', 'Procurement', 'Trade finance', 'Risk'],
  },
  {
    id: 'pharma',
    icon: 'PHR',
    title: 'Pharmaceutical',
    heading: 'Healthcare supply precision',
    copy: 'Compliant pharmaceutical distribution, cold chain logistics, API sourcing, and healthcare supply solutions.',
    tags: ['Drug distribution', 'Cold chain', 'GMP', 'Regulatory', 'Exports'],
  },
  {
    id: 'chemical',
    icon: 'CHM',
    title: 'Chemical',
    heading: 'Specialty chemical solutions',
    copy: 'Specialty chemical procurement, safe storage, compliant delivery, and bulk supply for pharma, agriculture, manufacturing, and textiles.',
    tags: ['Specialty chemicals', 'Safe handling', 'REACH', 'Reagents', 'Bulk procurement'],
  },
  {
    id: 'engineering',
    icon: 'ENG',
    title: 'Engineering',
    heading: 'Industrial infrastructure built to last',
    copy: 'Industrial plant setup, MEP contracting, automation, infrastructure development, and mechanical project execution.',
    tags: ['Plant engineering', 'MEP', 'Automation', 'Turnkey', 'Maintenance'],
  },
  {
    id: 'realestate',
    icon: 'EST',
    title: 'Real Estate',
    heading: 'Premium property development',
    copy: 'Residential townships, commercial complexes, industrial parks, investment advisory, and transparent project governance.',
    tags: ['Residential', 'Commercial', 'Industrial parks', 'RERA', 'Advisory'],
  },
  {
    id: 'manufacturing',
    icon: 'MFG',
    title: 'Manufacturing & Retail',
    heading: 'From factory floor to consumer hands',
    copy: 'Integrated manufacturing units, private label programs, warehousing, and retail distribution networks.',
    tags: ['Contract manufacturing', 'Retail', 'OEM', 'Warehousing', 'Modern trade'],
  },
]

const stats = [
  ['15+', 'Years of excellence'],
  ['10+', 'Industry verticals'],
  ['500+', 'Projects delivered'],
  ['98%', 'Client satisfaction'],
]

const timeline = [
  ['2009', 'The Beginning', 'Founded in Ahmedabad with a focused commodity trading operation and a determined team.'],
  ['2012', 'Engineering & Manufacturing', 'Expanded into industrial engineering and contract manufacturing for private and public sector clients.'],
  ['2015', 'Hospitality Division', 'Launched hospitality management and resort development partnerships across western India.'],
  ['2018', 'Pharma & Chemical', 'Entered regulated pharmaceutical and specialty chemical markets with compliant operating systems.'],
  ['2021', 'Real Estate & Retail', 'Started RERA-aligned development and expanded retail touchpoints across priority markets.'],
  ['2025', 'Conglomerate Platform', 'Operating 10+ business units with multi-sector execution capability and a growing national footprint.'],
]

const projects = [
  ['realestate', 'Skyline Commercial Complex', '2.5 lakh sq ft commercial development in Ahmedabad with strong launch occupancy.'],
  ['hospitality', 'The Marquee Boutique Hotel', 'Operations overhaul improving revenue performance and guest satisfaction.'],
  ['engineering', 'Industrial Plant Setup', 'Turnkey engineering project for a textile manufacturer with MEP and automation.'],
  ['pharma', 'MedServe Supply Chain', 'Pharmaceutical procurement redesign reducing cost while improving delivery accuracy.'],
  ['events', 'Vibrant Gujarat Exhibition', 'Corporate exhibition booth design and management for a flagship investment summit.'],
  ['realestate', 'Green Valley Residences', 'Residential township delivered ahead of schedule with clean handover systems.'],
  ['engineering', 'GMP Facility Upgrade', 'Engineering overhaul of a pharma facility for export-grade compliance.'],
  ['hospitality', 'Resort F&B Launch', 'Five-outlet F&B ecosystem for a resort with stronger revenue contribution.'],
  ['events', 'Industry Conference', 'End-to-end event management for a national conference with exhibitors and broadcast.'],
]

const testimonials = [
  ['Rajesh Kumar', 'Director, Apex Infrastructure', 'Salvin delivered our commercial complex on time with exceptional project governance.'],
  ['Sneha Patel', 'COO, MedServe India', 'Their pharmaceutical supply chain team reduced procurement cost while improving delivery discipline.'],
  ['Arjun Mehta', 'Owner, The Marquee Hotels', 'The hospitality consulting team transformed operations and guest satisfaction scores.'],
]

function App() {
  const [page, setPage] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  useEffect(() => {
    const onScroll = () => document.body.classList.toggle('is-scrolled', window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visibleProjects = useMemo(
    () => projects.filter(([cat]) => filter === 'all' || cat === filter),
    [filter],
  )

  const navigate = (nextPage) => {
    setPage(nextPage)
    setMenuOpen(false)
    setFilter('all')
    setSubmitted(false)
  }

  return (
    <div className="site-shell">
      <Header page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />
      <main>
        {page === 'Home' && <HomePage navigate={navigate} />}
        {page === 'Services' && <ServicesPage navigate={navigate} />}
        {page === 'About' && <AboutPage navigate={navigate} />}
        {page === 'Portfolio' && (
          <PortfolioPage
            filter={filter}
            setFilter={setFilter}
            visibleProjects={visibleProjects}
            navigate={navigate}
          />
        )}
        {page === 'Contact' && <ContactPage submitted={submitted} setSubmitted={setSubmitted} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

function Header({ page, menuOpen, setMenuOpen, navigate }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="logo" type="button" onClick={() => navigate('Home')} aria-label="Salvin Industry home">
          <img src={SalvinLogo} style={{height:"50px"}} alt="Salvin Industry" />
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          {pages.map((item) => (
            <button
              className={page === item ? 'active' : ''}
              key={item}
              type="button"
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="btn-nav" type="button" onClick={() => navigate('Contact')}>
          Get in Touch
        </button>
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {pages.map((item) => (
          <button key={item} type="button" onClick={() => navigate(item)}>
            {item}
          </button>
        ))}
        <button className="btn-mobile" type="button" onClick={() => navigate('Contact')}>
          Get in Touch
        </button>
      </nav>
    </header>
  )
}

function HomePage({ navigate }) {
  return (
    <>
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
            Salvin Industry powers growth across food, hospitality, real estate, pharma, engineering,
            trading, events, and retail with precision, trust, and innovation.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" type="button" onClick={() => navigate('Services')}>
              Explore Services
            </button>
            <button className="btn-ghost" type="button" onClick={() => navigate('About')}>
              Our Story
            </button>
          </div>
          <Stats />
        </div>
        <div className="floating-cards">
          <FloatingCard label="Hospitality" detail="Premium segment" />
          <FloatingCard label="Pharma" detail="Compliance first" />
          <FloatingCard label="Real Estate" detail="Commercial and residential" />
        </div>
      </section>
      <Marquee />
      <ServicesOverview navigate={navigate} />
      <WhySalvin navigate={navigate} />
      <Workflow />
      <Testimonials />
      <Cta title="Ready to partner with Salvin?" navigate={navigate} />
    </>
  )
}

function ServicesPage({ navigate }) {
  return (
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
              <button className="btn-primary" type="button" onClick={() => navigate('Contact')}>
                Partner With Us
              </button>
            </div>
            <div className="industry-visual glass-card">
              <span>{industry.icon}</span>
            </div>
          </div>
        </section>
      ))}
      <Cta title="Have a project in mind?" navigate={navigate} />
    </>
  )
}

function AboutPage({ navigate }) {
  return (
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
            <article className="glass-card value-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
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
      <Cta title="Join the Salvin story" navigate={navigate} />
    </>
  )
}

function PortfolioPage({ filter, setFilter, visibleProjects, navigate }) {
  const filters = ['all', 'realestate', 'hospitality', 'engineering', 'pharma', 'events']
  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Work that speaks for itself"
        copy="Selected projects spanning industries, geographies, and scales."
      />
      <div className="filter-tabs">
        {filters.map((item) => (
          <button
            className={filter === item ? 'active' : ''}
            key={item}
            type="button"
            onClick={() => setFilter(item)}
          >
            {item === 'all' ? 'All Projects' : item}
          </button>
        ))}
      </div>
      <section className="section-pad">
        <div className="container portfolio-grid">
          {visibleProjects.map(([cat, title, copy]) => (
            <article className="portfolio-card" key={title}>
              <div className="portfolio-img">{cat.slice(0, 3).toUpperCase()}</div>
              <div className="portfolio-info">
                <h4>{title}</h4>
                <p>{copy}</p>
                <span>{cat}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Cta title="Your project could be next" navigate={navigate} />
    </>
  )
}

function ContactPage({ submitted, setSubmitted }) {
  return (
    <>
      <PageHero
        tag="Contact Us"
        title="Let's build something great"
        copy="Reach out for partnerships, projects, or investment opportunities. We respond within 24 hours."
      />
      <section className="section-pad">
        <div className="container contact-layout">
          <div>
            <h3>Get in Touch</h3>
            {[
              ['Email Us', 'info@salvinindustry.com'],
              ['Call Us', '+91 98000 00000'],
              ['Our Office', 'Salvin House, SG Highway, Ahmedabad, Gujarat 380054'],
              ['Business Hours', 'Mon-Sat: 9:30 AM - 6:30 PM IST'],
            ].map(([title, copy]) => (
              <article className="contact-info-item" key={title}>
                <div className="contact-info-icon">{title.slice(0, 2)}</div>
                <div>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              </article>
            ))}
            <div className="contact-tags">
              {['Business partnership', 'Investment enquiry', 'Procurement', 'Project brief', 'Careers'].map((tag) => (
                <span className="itag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-box">
                <strong>Message sent.</strong>
                <span>Our team will get back to you within 24 hours.</span>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="form-row">
                  <FormField label="First Name" placeholder="Rajesh" />
                  <FormField label="Last Name" placeholder="Kumar" />
                </div>
                <div className="form-row">
                  <FormField label="Email Address" placeholder="rajesh@company.com" type="email" />
                  <FormField label="Phone Number" placeholder="+91 98000 00000" type="tel" required={false} />
                </div>
                <FormField label="Company / Organization" placeholder="Your company name" required={false} />
                <label className="form-group">
                  Interested In
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select a topic...
                    </option>
                    {industries.map((industry) => (
                      <option key={industry.id}>{industry.title}</option>
                    ))}
                    <option>Investment Opportunity</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="form-group">
                  Your Message
                  <textarea placeholder="Describe your project or inquiry..." required />
                </label>
                <button className="btn-primary submit-button" type="submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <div className="map-band">
        <strong>Salvin Industry Headquarters</strong>
        <span>Salvin House, SG Highway, Ahmedabad, Gujarat 380054</span>
      </div>
    </>
  )
}

function FormField({ label, placeholder, type = 'text', required = true }) {
  return (
    <label className="form-group">
      {label}
      <input type={type} placeholder={placeholder} required={required} />
    </label>
  )
}

function ServicesOverview({ navigate }) {
  return (
    <section className="section-pad">
      <SectionHeader
        tag="What We Do"
        title="Built for every industry. Designed for growth."
        copy="From raw materials to refined experiences, Salvin Industry operates with precision across diverse sectors."
      />
      <div className="container services-grid">
        {industries.map((industry) => (
          <article className="service-card" key={industry.id}>
            <div className="service-icon-wrap">{industry.icon}</div>
            <h3>{industry.title}</h3>
            <p>{industry.copy}</p>
            <button type="button" onClick={() => navigate('Services')}>
              Learn more
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

function WhySalvin({ navigate }) {
  return (
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
          <button className="btn-primary" type="button" onClick={() => navigate('About')}>
            Our Story
          </button>
        </div>
        <Dashboard />
      </div>
    </section>
  )
}

function Workflow() {
  return (
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
}

function Testimonials() {
  return (
    <section className="section-pad bg-light">
      <SectionHeader tag="Client Stories" title="What our partners say" />
      <div className="container testi-grid">
        {testimonials.map(([name, role, quote]) => (
          <article className="testi-card glass-card" key={name}>
            <div className="testi-stars">★★★★★</div>
            <p>"{quote}"</p>
            <strong>{name}</strong>
            <span>{role}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Dashboard() {
  return (
    <div className="dashboard-mockup glass-card">
      <div className="dash-header">
        <span />
        <span />
        <span />
        <strong>Salvin Operations Dashboard</strong>
      </div>
      <div className="dash-stats-row">
        <div>
          <strong>Rs 240Cr</strong>
          <span>Annual revenue</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>Business units</span>
        </div>
      </div>
      <div className="bar-chart">
        {[55, 72, 48, 88, 63, 41].map((height, index) => (
          <i key={height + index} style={{ height: `${height}%` }} />
        ))}
      </div>
      <div className="dash-tags">
        <span>Real estate Q4 surge</span>
        <span>Hospitality expanding</span>
      </div>
    </div>
  )
}

function Cta({ title, navigate }) {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2>{title}</h2>
        <p>Whether scaling operations or entering a new market, Salvin Industry brings the expertise you need.</p>
        <div className="cta-buttons">
          <button className="btn-primary" type="button" onClick={() => navigate('Contact')}>
            Start a Conversation
          </button>
          <button className="btn-outline-white" type="button" onClick={() => navigate('Services')}>
            View Services
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <button className="logo" type="button" onClick={() => navigate('Home')}>
            <span className="logo-mark">S</span>
            <span className="logo-text">
              Salvin <span>Industry</span>
            </span>
          </button>
          <p>Powering diverse industries with precision, trust, and innovation since 2009.</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          {industries.slice(0, 5).map((industry) => (
            <button key={industry.id} type="button" onClick={() => navigate('Services')}>
              {industry.title}
            </button>
          ))}
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          {['About', 'Portfolio', 'Contact'].map((item) => (
            <button key={item} type="button" onClick={() => navigate(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="footer-col">
          <h5>Get in Touch</h5>
          <p>info@salvinindustry.com<br />+91 98000 00000<br />Ahmedabad, Gujarat, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Salvin Industry. All rights reserved.</span>
        <span>Privacy Policy · Terms of Use</span>
      </div>
    </footer>
  )
}

function Stats() {
  return (
    <div className="hero-stats">
      {stats.map(([value, label]) => (
        <div className="stat-item" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

function SectionHeader({ tag, title, copy }) {
  return (
    <div className="container section-header">
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-sub">{copy}</p>}
    </div>
  )
}

function PageHero({ tag, title, copy }) {
  return (
    <section className="page-hero">
      <Background />
      <div className="page-hero-inner">
        <div className="section-tag">{tag}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  )
}

function Background() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-overlay" />
    </div>
  )
}

function FloatingCard({ label, detail }) {
  return (
    <article className="fcard glass-card">
      <div className="fcard-icon">{label.slice(0, 2)}</div>
      <div>
        <strong>{label}</strong>
        <span>{detail}</span>
      </div>
    </article>
  )
}

function Marquee() {
  const labels = industries.map((industry) => industry.title)
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...labels, ...labels].map((label, index) => (
          <span key={`${label}-${index}`}>{label}</span>
        ))}
      </div>
    </div>
  )
}

export default App
