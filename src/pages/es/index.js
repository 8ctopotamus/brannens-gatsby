import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HomeLogos from "../../components/home-logos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
      keywords={[
        `sujetadores`,
        `herramientas`,
        `construcción`,
        `suministros`
      ]}
      lang="es"
    />
    <h1>Productos destacados</h1>
    <div className="page-content">
      <HomeLogos />
    </div>
  </Layout>
)

export default IndexPage
