import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CloudCog,
  Code2,
  DatabaseZap,
  Factory,
  Gauge,
  Headphones,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ProjectDashboardGreen from './assets/project-dashboard-green.jpg'
import ProjectDashboardOffice from './assets/project-dashboard-office.jpg'
import SalvinLogo from './assets/salvin_logo.jpeg'
import Salvinbg from './assets/salvin.png'

const navItems = ['Home', 'Projects', 'Contact Us']

const services = [
  ['ERP Implementation', 'Finance, inventory, procurement, production, HR, and compliance systems built around real operations.', Boxes],
  ['CRM & Sales Automation', 'Lead routing, pipeline governance, customer service, renewals, and partner workflows that increase conversion.', UsersRound],
  ['Dashboards & Analytics', 'Executive KPIs, role-based BI, forecasting, and actionable reporting connected to your live business data.', BarChart3],
  ['Workflow Automation', 'Approval chains, alerts, document flows, integrations, and exception handling that remove manual bottlenecks.', Workflow],
  ['Custom Software', 'Modern web portals, mobile apps, APIs, and internal platforms designed for scale, security, and adoption.', Code2],
  ['Cloud & Integrations', 'Secure cloud deployments, third-party integrations, data migration, and long-term managed support.', CloudCog],
]

const industries = ['Manufacturing', 'Retail & Distribution', 'Real Estate', 'Healthcare', 'Education', 'Logistics', 'Professional Services', 'Hospitality']

const modules = [
  ['Finance', 'Ledger, receivables, payables, GST, approvals'],
  ['Inventory', 'Warehouses, batches, reorder, barcode flows'],
  ['Sales CRM', 'Leads, deals, quotes, follow-ups, renewals'],
  ['Projects', 'Milestones, billing, resources, profitability'],
  ['HRMS', 'Attendance, payroll, leave, performance'],
  ['Service Desk', 'Tickets, SLA, escalation, customer portal'],
  ['Production', 'BOM, work orders, quality, maintenance'],
  ['BI Analytics', 'KPI dashboards, alerts, forecasting, exports'],
]

const process = [
  ['01', 'Discover', 'Map business goals, users, workflows, pain points, integrations, and reporting expectations.'],
  ['02', 'Design', 'Create architecture, wireframes, module scope, data model, migration plan, and delivery roadmap.'],
  ['03', 'Build', 'Develop in sprints with demos, test automation, security checks, and stakeholder feedback.'],
  ['04', 'Launch', 'Migrate data, train teams, deploy securely, monitor adoption, and improve continuously.'],
]

const techStack = ['React', 'Node.js', 'Laravel', 'Python', 'PostgreSQL', 'SQL Server', 'Power BI', 'AWS', 'Azure', 'Docker', 'REST APIs', 'Microsoft 365']

const benefits = [
  ['35%', 'faster approvals'],
  ['24/7', 'real-time visibility'],
  ['50%', 'less manual reporting'],
  ['99.9%', 'cloud-ready uptime'],
]

const testimonials = [
  ['Operations Director', 'Manufacturing Group', 'Their ERP team understood our shop-floor reality and gave leadership clear visibility without slowing production.'],
  ['Founder', 'B2B Distribution Startup', 'We replaced spreadsheets with a CRM and order workflow our sales team actually uses every day.'],
  ['CFO', 'Multi-Branch Services Firm', 'Dashboards, approvals, and billing controls helped us scale with fewer operational surprises.'],
]

const faqs = [
  ['Can you customize ERP and CRM around our process?', 'Yes. We design around your workflows first, then configure or build modules where standard software cannot support the business.'],
  ['Do you migrate data from spreadsheets or old software?', 'Yes. We clean, map, validate, import, and reconcile legacy data so teams can move without losing business context.'],
  ['Can you integrate accounting, WhatsApp, email, or payment tools?', 'Yes. We build secure APIs and connectors for finance, communication, payments, BI, and industry-specific systems.'],
  ['Do you provide support after launch?', 'Yes. We provide training, managed support, monitoring, enhancement sprints, and adoption reviews after go-live.'],
]

const heroModules = [
  {
    icon: BarChart3,
    title: 'Finance & Accounting',
    sub: 'Ledger / GST / Reports',
    desc: 'Real-time P&L, automated GST filings, bank reconciliation, and multi-branch consolidation - all in one place.',
    pills: ['GST / TDS filing', 'Multi-currency', 'Auto reconciliation', 'Custom reports'],
  },
  {
    icon: UsersRound,
    title: 'CRM & Sales',
    sub: 'Leads / Pipeline / Follow-ups',
    desc: 'Track every lead from first touch to closed deal. Automate follow-ups, set reminders, and never let a hot deal go cold.',
    pills: ['Lead scoring', 'Pipeline view', 'Email sequences', 'Sales analytics'],
  },
  {
    icon: Boxes,
    title: 'Inventory',
    sub: 'Stock / Purchase / Orders',
    desc: 'Live stock levels, auto purchase orders, and vendor management - eliminate manual counting and stockouts forever.',
    pills: ['Low-stock alerts', 'Multi-warehouse', 'Purchase orders', 'Batch tracking'],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    sub: 'Approvals / Alerts / Tasks',
    desc: 'Route approvals, trigger alerts, and assign tasks automatically. Your team focuses on work that matters, not admin.',
    pills: ['Approval chains', 'Auto notifications', 'SLA tracking', 'Custom triggers'],
  },
  {
    icon: Headphones,
    title: 'HR & Payroll',
    sub: 'Attendance / Salary / ESS',
    desc: 'Attendance, leave, and salary in one system. Run compliant payroll in minutes with ESS portal for employees.',
    pills: ['Attendance sync', 'Salary slips', 'Leave management', 'Compliance reports'],
  },
  {
    icon: Gauge,
    title: 'Analytics & BI',
    sub: 'Dashboards / KPIs / Drill-down',
    desc: 'Pre-built and custom dashboards that surface the numbers your leadership needs - updated in real time.',
    pills: ['Live dashboards', 'Drill-down reports', 'KPI tracking', 'Export to Excel'],
  },
]

const projects = [
  {
    category: 'ERP',
    title: 'Manufacturing ERP Command Center',
    industry: 'Manufacturing',
    copy: 'Production planning, inventory, purchase approvals, quality checks, and live profitability dashboard for a multi-unit plant.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Power BI'],
    metric: '28% lower stock-outs',
  },
  {
    category: 'CRM',
    title: 'B2B Sales CRM & Partner Portal',
    industry: 'Distribution',
    copy: 'Lead capture, quote approvals, distributor pricing, renewal reminders, and mobile-ready sales dashboards.',
    stack: ['React', 'Laravel', 'MySQL', 'WhatsApp API'],
    metric: '41% faster follow-ups',
  },
  {
    category: 'Analytics',
    title: 'Executive KPI Analytics Suite',
    industry: 'Services',
    copy: 'Role-based dashboards for revenue, utilization, cashflow, branch performance, and SLA health.',
    stack: ['Power BI', 'SQL Server', 'Azure', 'ETL'],
    metric: '12 live board reports',
  },
  {
    category: 'Workflow',
    title: 'Procurement Approval Automation',
    industry: 'Healthcare',
    copy: 'Vendor onboarding, purchase requests, budget checks, GRN matching, and audit-friendly approval trails.',
    stack: ['React', 'Python', 'PostgreSQL', 'Email API'],
    metric: '35% shorter cycle',
  },
  {
    category: 'ERP',
    title: 'Real Estate Project ERP',
    industry: 'Real Estate',
    copy: 'Booking, collections, construction milestones, vendor bills, document vault, and customer communication.',
    stack: ['React', 'Node.js', 'AWS', 'Razorpay'],
    metric: '360 degree project view',
  },
  {
    category: 'CRM',
    title: 'Customer Service Desk CRM',
    industry: 'SaaS',
    copy: 'Ticket SLA, escalation matrix, knowledge base, customer portal, renewal workflow, and support analytics.',
    stack: ['React', 'Firebase', 'Cloud Functions', 'Looker'],
    metric: '64% SLA improvement',
  },
]

const projectFilters = ['All', 'ERP', 'CRM', 'Analytics', 'Workflow']
const projectImages = [ProjectDashboardGreen, ProjectDashboardOffice]

function App() {
  const [page, setPage] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  useEffect(() => {
    const onScroll = () => document.body.classList.toggle('is-scrolled', window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const shownProjects = useMemo(
    () => projects.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  )

  const navigate = (nextPage) => {
    setPage(nextPage)
    setMenuOpen(false)
    setSubmitted(false)
    if (nextPage !== 'Projects') setFilter('All')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar page={page} navigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {page === 'Home' && <HomePage navigate={navigate} />}
          {page === 'Projects' && (
            <ProjectsPage filter={filter} setFilter={setFilter} shownProjects={shownProjects} navigate={navigate} />
          )}
          {page === 'Contact Us' && <ContactPage submitted={submitted} setSubmitted={setSubmitted} navigate={navigate} />}
        </motion.main>
      </AnimatePresence>
      <Footer navigate={navigate} />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function Navbar({ page, navigate, menuOpen, setMenuOpen }) {
  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-3 py-3 shadow-sm shadow-slate-200/70 backdrop-blur-xl sm:gap-6 sm:px-4 lg:px-6">
        <button className="flex items-center gap-3" type="button" onClick={() => navigate('Home')} aria-label="Salvin ERP home">
           <img className="site-logo" src={SalvinLogo} alt="Salvin Industry" />
          <span className="leading-tight">
            {/* <span className="block text-lg font-black tracking-tight text-slate-950">Salvin ERP</span> */}
           {/* <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Digital Systems</span> */} 
          </span>
        </button>

        <nav className="ml-auto hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              className={`nav-link rounded-full px-4 py-2 text-sm font800 transition ${page === item ? 'active text-sky-700' : 'text-slate-600 hover:text-sky-700'}`}
              key={item}
              type="button"
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font900 text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-sky-700 md:inline-flex" type="button" onClick={() => navigate('Contact Us')}>
          Book Consultation
        </button>
        <button
          className="ml-auto inline-grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <motion.nav
          className="mx-auto mt-2 grid max-w-7xl gap-2 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-slate-200/80 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <button className="rounded-xl px-4 py-3 text-left font800 text-slate-700 hover:bg-sky-50 hover:text-sky-700" key={item} type="button" onClick={() => navigate(item)}>
              {item}
            </button>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <LogoStrip />
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <Modules />
      <Process />
      <Technology />
      <Benefits />
      <Testimonials />
      <Stats />
      <FAQ />
      <FinalCTA navigate={navigate} />
    </>
  )
}

function Hero({ navigate }) {
  return (
    <section className="hero-section relative overflow-hidden px-4 pb-10 pt-32 sm:pt-36 lg:pb-14 lg:pt-40">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="hero-inner mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div variants={stagger} initial="hidden" animate="show" className="hero-copy relative z-10">
          <motion.div variants={fadeUp} className="hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font800 text-sky-700 shadow-sm backdrop-blur">
            <Sparkles size={16} /> ERP, CRM, automation, dashboards
          </motion.div>
          <motion.h1 variants={fadeUp} className="hero-title max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Enterprise software that turns complex operations into clear growth.
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-copy-text mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We design and build ERP, CRM, analytics, workflow automation, and custom software for companies that need reliable systems, faster decisions, and scalable execution.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="primary-btn" type="button" onClick={() => navigate('Contact Us')}>
              Start ERP/CRM Project <ArrowRight size={18} />
            </button>
            <button className="secondary-btn" type="button" onClick={() => navigate('Projects')}>
              View Case Studies
            </button>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-stats mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {benefits.slice(0, 3).map(([value, label]) => (
              <div className="glass-panel rounded-2xl p-4" key={label}>
                <strong className="block text-2xl font-black text-slate-950">{value}</strong>
                <span className="text-sm font700 text-slate-500">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="hero-visual-wrap relative z-10" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65 }}>
          <EnterpriseVisual />
        </motion.div>
      </div>
    </section>
  )
}

function EnterpriseVisual() {
  const [activeModule, setActiveModule] = useState(0)
  const selected = heroModules[activeModule]
  const SelectedIcon = selected.icon

  return (
    <div className="erp-hero-panel glass-panel">
      <img className="home-hero-image" src={ProjectDashboardGreen} alt="ERP dashboard in office workspace" />
      <p className="erp-panel-title">What we build for you</p>

      <div className="erp-modules-grid">
        {heroModules.map((module, index) => {
          const Icon = module.icon
          return (
            <button
              className={`erp-module-card ${activeModule === index ? 'active' : ''}`}
              type="button"
              key={module.title}
              onClick={() => setActiveModule(index)}
            >
              <Icon className="erp-module-icon" size={21} aria-hidden="true" />
              <span className="erp-module-name">{module.title}</span>
              <span className="erp-module-sub">{module.sub}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="erp-detail-box"
          key={selected.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          <div className="erp-detail-header">
            <div className="erp-detail-icon">
              <SelectedIcon size={19} aria-hidden="true" />
            </div>
            <p className="erp-detail-title">{selected.title}</p>
          </div>
          <p className="erp-detail-desc">{selected.desc}</p>
          <div className="erp-feature-pills">
            {selected.pills.map((pill) => (
              <span className="erp-pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="erp-flow-bar" aria-label="ERP workflow">
        <span className="erp-flow-step">
          <DatabaseZap size={15} aria-hidden="true" /> Data collected
        </span>
        <span className="erp-flow-arrow">&gt;</span>
        <span className="erp-flow-step">
          <Workflow size={15} aria-hidden="true" /> Auto-processed
        </span>
        <span className="erp-flow-arrow">&gt;</span>
        <span className="erp-flow-step">
          <BarChart3 size={15} aria-hidden="true" /> Insights ready
        </span>
        <span className="erp-flow-arrow">&gt;</span>
        <span className="erp-flow-step">
          <Rocket size={15} aria-hidden="true" /> Growth happens
        </span>
      </div>
    </div>
  )
}

function LogoStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-4 my-1">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-sm font900 uppercase tracking-[0.18em] text-slate-800">
        {['ERP', 'CRM', 'BI', 'Automation', 'Integrations', 'Cloud'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div className="mx-auto mb-12 max-w-3xl text-center" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
      <motion.p variants={fadeUp} className="section-eyebrow">{eyebrow}</motion.p>
      <motion.h2 variants={fadeUp} className="section-title">{title}</motion.h2>
      {copy && <motion.p variants={fadeUp} className="section-copy">{copy}</motion.p>}
    </motion.div>
  )
}

function About() {
  return (
    <section className="pt-11 pb-20 bg-slate-50 px-4">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-eyebrow text-left">About company</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-left text-4xl">ERP/CRM partner for teams that have outgrown spreadsheets and disconnected tools.</motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-slate-600">
            Salvin ERP helps growing companies centralize operations, automate repetitive work, and convert raw business data into confident decisions. We combine product thinking, engineering discipline, and enterprise implementation experience.
          </motion.p>
        </motion.div>
        <motion.div className="grid gap-4 sm:grid-cols-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {[
            [Target, 'Business-first discovery', 'We map real pain points before writing code.'],
            [Layers3, 'Modular architecture', 'Start focused, then scale across departments.'],
            [ShieldCheck, 'Security-minded delivery', 'Access control, audit trails, and reliable data handling.'],
            [Headphones, 'Long-term support', 'Training, adoption, enhancements, and managed care.'],
          ].map(([Icon, title, copy]) => (
            <motion.article className="feature-card" variants={fadeUp} key={title}>
              <Icon className="text-sky-600" size={26} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="pt-5 pb-20 bg-white px-4">
      <SectionHeading
        eyebrow="ERP & CRM services" 
        title="One partner for systems, automation, and business visibility."
        copy="We deliver the core software capabilities modern companies need to operate with discipline and scale without chaos."
      />
      <motion.div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        {services.map(([title, copy, Icon]) => (
          <motion.article className="service-card" variants={fadeUp} key={title}>
            <div className="icon-box"><Icon size={24} /></div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

function WhyChoose() {
  const reasons = [
    'Domain-led consultants who understand approval chains, inventory movement, sales funnels, billing, and reporting pressure.',
    'Reusable components and clean architecture that keep delivery fast without trapping you in generic software.',
    'Transparent roadmap, sprint demos, documentation, user training, and post-launch support.',
    'Strong UI/UX, responsive portals, secure access roles, and dashboards people can trust.',
  ]
  return (
    <section className="section-space why-choose-band px-4">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-eyebrowwhy text-left">Why choose us</p>
          <h2 className="section-titlewhy text-left text-blue-200">Premium engineering with enterprise implementation discipline.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-100">
            We do more than ship screens. We help teams redesign operations, reduce leakage, and build systems that leaders can rely on.
          </p>
        </div>
        <div className="grid gap-4">
          {reasons.map((reason) => (
            <div className="reason-row" key={reason}>
              <CheckCircle2 size={22} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Industries() {
  return (
    <section className="pt-15 pb-20 bg-slate-50 px-4">
      <SectionHeading eyebrow="Industries we serve" title="Built for process-heavy businesses." copy="Our ERP and CRM systems adapt to industry workflows, compliance needs, team structures, and reporting rhythms." />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {industries.map((industry, index) => (
          <motion.div className="industry-pill" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} key={industry}>
            <Factory size={20} />
            {industry}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Modules() {
  return (
    <section className="pt-5 pb-20 bg-white px-4">
      <SectionHeading eyebrow="Features & modules" title="Everything your business needs in one connected platform." />
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map(([title, copy]) => (
          <article className="module-card" key={title}>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <Layers3 size={22} />
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="pt-5 pb-20 bg-slate-50 px-4">
      <SectionHeading eyebrow="Development workflow" title="Structured delivery from discovery to adoption." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {process.map(([step, title, copy]) => (
          <article className="process-card" key={title}>
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Technology() {
  return (
    <section className="pt-5 pb-20 bg-white px-4">
      <SectionHeading eyebrow="Technology stack" title="Modern, secure, integration-ready engineering." copy="We choose proven tools that keep systems maintainable, fast, and ready for future expansion." />
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <span className="tech-chip" key={tech}>{tech}</span>
        ))}
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="pt-15 pb-20 bg-slate-50 px-4">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-eyebrow text-left">Client benefits</p>
          <h2 className="section-title text-left">Measurable results across operations, sales, finance, and leadership.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Better systems reduce delays, expose risks early, improve accountability, and help every team work from one version of truth.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map(([value, label]) => (
            <div className="result-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="pt-15 pb-20 bg-white px-4">
      <SectionHeading eyebrow="Testimonials" title="Trusted by leaders who need control, speed, and clarity." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {testimonials.map(([name, role, quote]) => (
          <article className="testimonial-card" key={role}>
            <div className="mb-5 text-amber-400">★★★★★</div>
            <p>"{quote}"</p>
            <strong>{name}</strong>
            <span>{role}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="px-4 py-5">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[3rem] bg-slate-950 p-2 text-white shadow-2xl shadow-slate-300 md:grid-cols-4">
        {[
          ['120+', 'modules delivered'],
          ['18+', 'industries served'],
          ['40%', 'avg. reporting time saved'],
          ['24 hr', 'support response goal'],
        ].map(([value, label]) => (
          <div className="p-5 text-center" key={label}>
            <strong className="block text-4xl font-black">{value}</strong>
            <span className="mt-2 block text-sm font800 uppercase tracking-[0.16em] text-sky-200">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="pt-10 pb-20 bg-slate-50 px-4">
      <SectionHeading eyebrow="FAQ" title="Answers before we start." />
      <div className="mx-auto grid max-w-4xl gap-4">
        {faqs.map(([question, answer]) => (
          <details className="faq-item" key={question}>
            <summary>{question}<ChevronDown size={20} /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function ProjectsPage({ filter, setFilter, shownProjects, navigate }) {
  return (
    <>
      <PageHero eyebrow="Projects" title="ERP and CRM case studies built for real business outcomes." copy="Explore industry-wise implementations, dashboard mockups, automation flows, and technology decisions behind scalable systems." />
      <section className="border-b border-slate-200 bg-white px-4 py-4 sticky top-[92px] z-30">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
          {projectFilters.map((item) => (
            <button className={`filter-btn ${filter === item ? 'active' : ''}`} key={item} type="button" onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
      </section>
      <section className="pt-15 pb-20 bg-slate-50 px-4">
        <motion.div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3" initial="hidden" animate="show" variants={stagger}>
          {shownProjects.map((project, index) => (
            <motion.article className="project-card group" variants={fadeUp} key={project.title}>
              <DashboardMockup category={project.category} image={projectImages[index % projectImages.length]} title={project.title} />
              <div className="p-6">
                <div className="project-meta mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font900 uppercase tracking-[0.14em] text-sky-700">{project.category}</span>
                  <span className="text-sm font800 text-slate-400">{project.industry}</span>
                </div>
                <h3 className="text-xl font-black tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{project.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font800 text-slate-500" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-slate-950 px-4 py-3 text-sm font900 text-white">{project.metric}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
      <FinalCTA title="Need a project like these?" copy="Share your workflow problem. We will map the right ERP, CRM, dashboard, or automation path." navigate={navigate} />
    </>
  )
}

function DashboardMockup({ category, image, title }) {
  return (
    <div className="dashboard-shot">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <strong className="ml-auto text-xs font900 uppercase tracking-[0.14em] text-slate-400">{category}</strong>
      </div>
      <img className="dashboard-image" src={image} alt={`${title} dashboard preview`} loading="lazy" />
    </div>
  )
}

function ContactPage({ submitted, setSubmitted, navigate }) {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let’s design your next ERP, CRM, or automation system." copy="Tell us where operations feel slow, disconnected, or unclear. We will help convert it into a focused software roadmap." />
      <section className="pt-2 pb-20 bg-slate-50 px-4">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid content-start gap-4">
            {[
              [Mail, 'Email', 'hello@salvinerp.com'],
              [Phone, 'Phone', '9898727796'],
              [MapPin, 'Address', 'Salvin House, SG Highway, Ahmedabad, Gujarat 380054'],
              [Clock3, 'Business Hours', 'Mon-Sat, 9:30 AM - 6:30 PM IST'],
            ].map(([Icon, title, copy]) => (
              <article className="contact-info" key={title}>
                <Icon className="text-sky-700" size={24} />
                <div>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              </article>
            ))}
            <div className="social-row">
              {['LinkedIn', 'X', 'Facebook', 'Instagram'].map((item) => (
                <a href={`#${item.toLowerCase()}`} key={item} aria-label={item}>{item.slice(0, 2)}</a>
              ))}
            </div>
          </div>
          <div className="form-card">
            {submitted ? (
              <div className="success-state">
                <CheckCircle2 size={42} />
                <h3>Message received.</h3>
                <p>Our consulting team will respond within one business day.</p>
                <button className="secondary-btn mx-auto" type="button" onClick={() => navigate('Projects')}>View Projects</button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" placeholder="Your name" />
                  <Field label="Work Email" placeholder="name@company.com" type="email" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" placeholder="9898727796" type="tel" />
                  <Field label="Company" placeholder="Company name" />
                </div>
                <label className="field">
                  Project Interest
                  <select required defaultValue="">
                    <option value="" disabled>Select service</option>
                    <option>ERP Implementation</option>
                    <option>CRM Development</option>
                    <option>Workflow Automation</option>
                    <option>Dashboards & Analytics</option>
                    <option>Custom Software</option>
                  </select>
                </label>
                <label className="field">
                  Message
                  <textarea placeholder="Tell us about your current process, tools, and goals..." required />
                </label>
                <button className="primary-btn w-full justify-center" type="submit">Send Consultation Request <ArrowRight size={18} /></button>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/70">
          <iframe
            title="Google map Ahmedabad"
            className="h-80 w-full"
            loading="lazy"
            src="https://www.google.com/maps?q=SG%20Highway%20Ahmedabad%20Gujarat&output=embed"
          />
        </div>
      </section>
      <FinalCTA title="Ready for a smarter business system?" copy="Start with a discovery call and leave with a practical implementation direction." navigate={navigate} />
    </>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="field">
      {label}
      <input required {...props} />
    </label>
  )
}

function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="page-hero px-4 pb-16 pt-36">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{copy}</p>
      </div>
    </section>
  )
}

function FinalCTA({ navigate, title = 'Build a connected, scalable business system.', copy = 'Book a strategy call for ERP, CRM, workflow automation, dashboards, or custom software.' }) {
  return (
    <section className="cta-band px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-100">{copy}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="primary-btn bg-white text-slate-950 hover:bg-sky-50" type="button" onClick={() => navigate('Contact Us')}>Book Consultation</button>
          <button className="outline-btn" type="button" onClick={() => navigate('Projects')}>Explore Projects</button>
        </div>
      </div>
    </section>
  )
}

function Footer({ navigate }) {
  return (
    <footer className="bg-slate-950 px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img className="footer-logo rounded-xl object-cover" src={Salvinbg} alt="Salvin logo" />
            <strong className="text-xl font-black">Salvin ERP</strong>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">Modern ERP, CRM, dashboards, automation, and custom software for ambitious businesses.</p>
        </div>
        <FooterCol title="Pages" items={navItems} navigate={navigate} />
        <FooterCol title="Services" items={['ERP', 'CRM', 'Automation', 'Analytics']} />
        <div>
          <h3 className="footer-title">Contact</h3>
          <p className="leading-7 text-slate-400">hello@salvinerp.com<br />9898727796<br />Ahmedabad, Gujarat</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500">
        <span>© 2026 Salvin ERP. All rights reserved.</span>
        <span>Built for enterprise clarity and growth.</span>
      </div>
    </footer>
  )
}

function FooterCol({ title, items, navigate }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <div className="grid gap-2">
        {items.map((item) => (
          <button className="w-fit text-left text-slate-400 transition hover:text-white" key={item} type="button" onClick={() => navigate?.(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
