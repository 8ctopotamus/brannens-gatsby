import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      borderRadius: `14px 14px 0 0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        
      }}
    >
      <h1 style={{ 
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
      </h1>

      <nav
        style={{
          background: '#FF8000',
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
          Home
        </Link>
        <Link
          to="/products"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Products
        </Link>
        <Link
          to="/about-us"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About Us
        </Link>
        <Link
          to="/contact-us"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact Us
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
