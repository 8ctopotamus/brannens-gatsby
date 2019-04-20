import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

import Logo from '../images/brannens-logo.png'

const Header = ({ siteTitle, toggleLang, lang }) => {
  const renderTranslation = (texts) => texts[lang]
  const handleHamburgerClick = e => {
    let nav
    let hamb
    if (e.target.parentNode.className === 'main-navigation') {
      nav = e.target.parentNode
      hamb = e.target
    } else {
      nav = e.target.parentNode.parentNode
      hamb = e.target.parentNode
    }
    if (nav.className.includes('change')) {
      nav.classList.remove('change')
      hamb.classList.remove('change')
    } else {
      nav.classList.add('change')   
      hamb.classList.add('change') 
    }
  }
  return (
    <header className="site-header">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h2 style={{
          margin: 0,
          padding: `1.45rem 1.0875rem`,
        }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <img src={Logo} alt={siteTitle} className="logo" />
          </Link>
        </h2>
        <div style={{
          margin: 0,
          padding: `1.45rem 1.0875rem`,
        }}>
          <button id="language-toggle-btn" onClick={ toggleLang }>
            { lang === 'en' ? 'Español' : 'English' }
          </button>
        </div>
      </div>
      <nav className="main-navigation">
        <div className="hamburger" onClick={ handleHamburgerClick }>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <Link to={ renderTranslation({en: '/', es: '/es/'}) }
              activeClassName="active">
          { renderTranslation({en: 'Home', es: 'Casa'}) }
        </Link>
        <Link to={ renderTranslation({en: 'products', es: '/es/productos'}) }
              activeClassName="active">
          { renderTranslation({en: 'Products', es: 'Productos'}) }
        </Link>
        <Link to={ renderTranslation({en: 'about-us', es: '/es/perfil-de-empresa'}) }
              activeClassName="active">
          { renderTranslation({en: 'About Us', es: 'Perfil de empresa'}) }
        </Link>
        <Link to={ renderTranslation({en: 'contact-us', es: '/es/contacto'}) }
              activeClassName="active">
          { renderTranslation({en: 'Contact Us', es: 'Contacto'}) }
        </Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  toggleLang: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
