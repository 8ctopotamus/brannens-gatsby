import React from "react"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

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
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
