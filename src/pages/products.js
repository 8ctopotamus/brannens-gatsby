import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandsList from '../components/brands-list'

const Products = () => (
  <Layout>
    <SEO title="Products" description="See our suppliers for fasteners, tools, and supplies here.  We have top named brands like DeWalt, Makita, Metabo, and more!" />
    <h1>Products</h1>
    <div className="page-content">
      <BrandsList />
    </div>
  </Layout>
)

export default Products
