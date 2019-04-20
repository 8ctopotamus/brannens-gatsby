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

const Layout = (props) => {
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
            pathPrefix
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
          // redirect
          const { urlTranslationsMap } = data.site.siteMetadata
          const currentPath = windowGlobal.location.pathname
          let path = currentPath
          
          if (currentPath.includes(data.site.pathPrefix)) {
            path = currentPath.replace(data.site.pathPrefix, '')
          }

          const match = urlTranslationsMap.find(arr => {
            return arr.indexOf(path) > -1
          })

          console.log({
            isProduction: currentPath.includes(data.site.pathPrefix),
            prefix: data.site.pathPrefix,
            urlTranslationsMap,
            currentPath,
            path,
            match
          })

          if (match) {
            const destination = match.find(p => p !== path)
            console.log('destionation: ',destination)
            navigateTo(destination)
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
              <a href="https://suurv.com  " target="_blank" rel="noopener noreferrer nofollow">SUURV Technologies</a>
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
