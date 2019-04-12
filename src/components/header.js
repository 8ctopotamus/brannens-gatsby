import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css';

const Header = ({ siteTitle }) => (
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
          <button>Eng</button> / <button>Esp</button>
        </div>
      </div>
      <nav className="main-navigation">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
