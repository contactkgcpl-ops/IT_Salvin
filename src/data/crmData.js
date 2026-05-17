export const navItems = ['Overview', 'Modules', 'Pipeline', 'Automation', 'Integrations', 'Reports']

export const metrics = [
  { value: '42%', label: 'Faster lead response', detail: 'Instant capture and routed follow-up' },
  { value: '18k', label: 'Contacts managed', detail: 'Accounts, branches, visits, and history' },
  { value: '3.7x', label: 'Quote velocity', detail: 'CPQ-ready approvals and order handoff' },
  { value: '99.9%', label: 'Cloud uptime target', detail: 'Role-based secure access' },
]

export const modules = [
  {
    name: 'Lead Command',
    tag: 'Pre-sales',
    copy: 'Capture website, WhatsApp, call, and field enquiries with dedupe, assignment rules, and SLA timers.',
  },
  {
    name: 'Account Atlas',
    tag: 'Customer 360',
    copy: 'See every contact, branch, contract, ticket, invoice, quotation, and visit from one account page.',
  },
  {
    name: 'Quote Studio',
    tag: 'Sales',
    copy: 'Build quotations, manage revisions, attach products, route approval, and convert to sales orders.',
  },
  {
    name: 'Visit Planner',
    tag: 'Field CRM',
    copy: 'Plan routes, log check-ins, capture notes, assign tasks, and sync mobile updates to managers.',
  },
  {
    name: 'Service Bridge',
    tag: 'Support',
    copy: 'Turn post-sales requests into tickets with priority, contract, technician, and resolution tracking.',
  },
  {
    name: 'Finance Sync',
    tag: 'ERP ready',
    copy: 'Connect CRM activity with invoices, receivables, purchase status, inventory, and payment follow-up.',
  },
]

export const workflowSteps = [
  { label: 'Capture', detail: 'Web, call, WhatsApp, field visit, and partner enquiries enter one clean queue.' },
  { label: 'Qualify', detail: 'Rules assign owners, detect duplicates, set SLA timers, and create next actions.' },
  { label: 'Close', detail: 'Quote approval, order handoff, invoice context, and service follow-up stay connected.' },
]

export const pipeline = [
  {
    stage: 'New',
    amount: 'Rs 24.8L',
    color: '#14b8a6',
    deals: ['Apex Motors', 'VR Tools', 'Aarvi Pumps'],
  },
  {
    stage: 'Qualified',
    amount: 'Rs 41.2L',
    color: '#f59e0b',
    deals: ['Zenith Fabrication', 'Orbit Traders', 'RS Components'],
  },
  {
    stage: 'Quote',
    amount: 'Rs 35.5L',
    color: '#ef4444',
    deals: ['Delta Packaging', 'Mass Auto', 'Kavya Engineering'],
  },
  {
    stage: 'Won',
    amount: 'Rs 52.7L',
    color: '#2563eb',
    deals: ['Prime Healthcare', 'Nexus Retail', 'Vela Systems'],
  },
]

export const automations = [
  'Assign leads by city, segment, and product interest',
  'WhatsApp quote reminder after 24 hours',
  'Manager approval when discount crosses threshold',
  'Auto-create service ticket after installation visit',
]

export const industries = [
  'Manufacturing',
  'Trading and distribution',
  'Healthcare equipment',
  'Automotive',
  'Field service',
  'MSME growth teams',
]

export const integrations = [
  'WhatsApp',
  'Email',
  'Tally',
  'Business Central',
  'Google Sheets',
  'Power BI',
  'Website forms',
  'Telephony',
]

export const testimonials = [
  {
    quote: 'Salvin CRM gives our team one view of every enquiry, quote, and follow-up. Managers finally see the movement before deals go cold.',
    name: 'Sales Head',
    company: 'Industrial distribution team',
  },
  {
    quote: 'Service requests, visits, and customer history now sit beside sales activity. It feels less like data entry and more like control.',
    name: 'Operations Manager',
    company: 'Equipment service business',
  },
]

export const reportRows = [
  { label: 'Lead to quote', value: '64%', trend: '+11%' },
  { label: 'Quote to order', value: '38%', trend: '+7%' },
  { label: 'Open follow-ups', value: '128', trend: '-19%' },
  { label: 'Receivable risk', value: 'Rs 8.4L', trend: '-6%' },
]
