import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css';

const Header = ({ siteTitle, toggleLang, lang }) => {
  const translate = (texts) => texts[lang]
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
            {siteTitle}
          </Link>
        </h2>
        <div style={{
          margin: 0,
          padding: `1.45rem 1.0875rem`, 
        }}>
          <button onClick={ toggleLang }>{ lang === 'en' ? 'Español' : 'English' }</button>
        </div>
      </div>
      <nav className="main-navigation">
        <Link to={ translate({en: '/', es: '/es/'}) }>
          { translate({en: 'Home', es: 'Casa'}) }
        </Link>
        <Link to={ translate({en: 'products', es: '/es/productos'}) }>
          { translate({en: 'Products', es: 'Productos'}) }
        </Link>
        <Link to={ translate({en: 'about-us', es: '/es/perfile-de-empresa'}) }>
          { translate({en: 'About Us', es: 'Perfil de empresa'}) }
        </Link>
        <Link to={ translate({en: 'contact-us', es: '/es/contacto'}) }>
          { translate({en: 'Contact Us', es: 'Contacto'}) }
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
