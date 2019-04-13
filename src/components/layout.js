/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { connect } from 'react-redux'
import { setCallbackLink } from '../actions'

import Header from "./header"
import "./layout.css"

const mapStateToProps = ({ callbackLink }) => ({ callbackLink })

const mapDispatchToProps = dispatch => ({
  setCallbackLink:  callbackLink => dispatch(setCallbackLink(callbackLink))
})

class Layout extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      lang: 'en'
    }
    this.handleToggleLang = this.handleToggleLang.bind(this)
  }

  handleToggleLang() {
    const lang = this.state.lang === 'en' ? 'es' : 'en'
    this.setState({lang})
  }

  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              paddingTop: 0,
              background: '#fff',
              borderRadius: '14px'
            }}
          >
            <Header 
              siteTitle={ data.site.siteMetadata.title }
              lang={ this.state.lang }
              toggleLang={ this.handleToggleLang }
            />
            <main style={{ padding: `0px 1.0875rem 1.45rem`, }}>
              { children }
            </main>
            <footer>
              © {new Date().getFullYear()}, Built by
              {` `}
              <a href="https://www.serafingroup.com" target="_blank" rel="noopener noreferrer">Serafin Group, LLC</a>
            </footer>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
