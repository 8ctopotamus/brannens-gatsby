/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, navigateTo } from "gatsby"
import { connect } from 'react-redux'
import { setLanguage } from '../actions'

import Header from "./header"
import "./layout.css"

const windowGlobal = typeof window !== 'undefined' && window

const mapStateToProps = ({ lang }) => ({ lang })

const mapDispatchToProps = dispatch => ({
  setLanguage: lang => dispatch(setLanguage(lang)),
})

const Layout = (props)=> {
  const {
    children,
    location,
    lang,
    setLanguage
  } = props

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              urlTranslationsMap
            }
          }
        }
      `}
      render={data => {
        const handleToggleLang = () => {
          const newLang = lang === 'en' ? 'es' : 'en'
          setLanguage(newLang)
          if (windowGlobal) {
            const currentPath = windowGlobal.location.pathname
            const { urlTranslationsMap } = data.site.siteMetadata
            const match = urlTranslationsMap.find(arr => arr.indexOf(currentPath) > -1)
            if (match) {
              const destination = match.find(path => path !== currentPath)
              navigateTo(destination)
            }
          }
        }
        return (
          <div className="page-wrap">
            <Header
              siteTitle={ data.site.siteMetadata.title }
              lang={ lang }
              toggleLang={ handleToggleLang }
              location={ location }
            />
            <main>
              { children }
            </main>
            <footer className="site-footer">
              © { new Date().getFullYear() }, Built by
              {` `}
              <a href="https://www.serafingroup.com" target="_blank" rel="noopener noreferrer">Serafin Group, LLC</a>
            </footer>
          </div>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
