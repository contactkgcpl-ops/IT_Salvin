import Button from '../components/Button/Button.jsx'
import FormField from '../components/Forms/FormField.jsx'
import PageHero from '../components/Layout/PageHero.jsx'
import { contactDetails, industries } from '../data/siteData.js'

const ContactPage = ({ submitted, setSubmitted }) => (
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
          {contactDetails.map(([title, copy]) => (
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
                <FormField label="Phone Number" placeholder="9898727796" type="tel" required={false} />
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
              <Button className="btn-primary submit-button" type="submit">
                Send Message
              </Button>
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

export default ContactPage
