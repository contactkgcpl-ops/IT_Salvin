import SalvinLogo from '../../assets/salvin_logo.jpeg'
import { pages } from '../../data/siteData.js'
import Button from '../Button/Button.jsx'

const Header = ({ page, menuOpen, setMenuOpen, navigate }) => (
  <header className="nav">
    <div className="nav-inner">
      <button className="logo" type="button" onClick={() => navigate('Home')} aria-label="Salvin Industry home">
        <img src={SalvinLogo} style={{ height: '50px' }} alt="Salvin Industry" />
      </button>

      <nav className="nav-links" aria-label="Primary navigation">
        {pages.map((item) => (
          <button className={page === item ? 'active' : ''} key={item} type="button" onClick={() => navigate(item)}>
            {item}
          </button>
        ))}
      </nav>

      <Button className="btn-nav" onClick={() => navigate('Contact')}>
        Get in Touch
      </Button>
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

export default Header
