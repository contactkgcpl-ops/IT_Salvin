import { industries } from '../../data/siteData.js'

const Footer = ({ navigate }) => (
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
        <p>
          info@salvinindustry.com
          <br />
          9898727796
          <br />
          Ahmedabad, Gujarat, India
        </p>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Salvin Industry. All rights reserved.</span>
      <span>Privacy Policy · Terms of Use</span>
    </div>
  </footer>
)

export default Footer
