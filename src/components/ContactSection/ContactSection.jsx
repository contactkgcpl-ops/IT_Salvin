const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Salvin demo desk</p>
        <h2>Bring leads, quotations, visits, and service into one CRM flow.</h2>
      </div>
      <form className="demo-form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Phone
          <input type="tel" placeholder="+91" />
        </label>
        <label>
          Company
          <input type="text" placeholder="Company name" />
        </label>
        <button type="button">Schedule Demo</button>
      </form>
    </section>
  )
}

export default ContactSection
