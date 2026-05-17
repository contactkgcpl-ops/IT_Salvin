import { useState } from 'react'
import { navItems } from '../../data/crmData.js'
import SalvinLogo from '../../assets/salvin_logo.jpeg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Salvin CRM home" onClick={closeMenu}>
        <img src={SalvinLogo} alt="Salvin CRM" />
        <h1>check</h1>
        <span>
          <strong>Salvin</strong>
          <small>CRM Cloud</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`nav-links${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a href={item === 'Overview' ? '#top' : `#${item.toLowerCase()}`} key={item} onClick={closeMenu}>
            {item}
          </a>
        ))}
        <a className="mobile-demo-link" href="#contact" onClick={closeMenu}>
          Book Demo
        </a>
      </nav>

      <a className="header-action" href="#contact" onClick={closeMenu}>
        Book Demo
      </a>
    </header>
  )
}

export default Header
