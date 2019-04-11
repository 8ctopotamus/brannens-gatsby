import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Products" />
    <h1>Products page</h1>
    <p>Welcome to products page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
