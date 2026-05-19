import Button from '../Button/Button.jsx'

const CTA = ({ title, navigate }) => (
  <section className="cta-section">
    <div className="cta-inner">
      <h2>{title}</h2>
      <p>Whether scaling operations or entering a new market, Salvin Industry brings the expertise you need.</p>
      <div className="cta-buttons">
        <Button onClick={() => navigate('Contact')}>Start a Conversation</Button>
        <Button className="btn-outline-white" onClick={() => navigate('Services')}>
          View Services
        </Button>
      </div>
    </div>
  </section>
)

export default CTA
