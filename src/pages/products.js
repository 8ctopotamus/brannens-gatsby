import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const brandsList = [
  {
    name: 'CCI',
    img: 'cci-logo.png',
    url: '#'
  }
]

const brands = brandsList.map(b => {
  return { ...b, img:   require('../images/brand-logos/' + b.img) }
})

const SecondPage = () => (
  <Layout>
    <SEO title="Products" description="See our suppliers for fasteners, tools, and supplies here.  We have top named brands like DeWalt, Makita, Metabo, and more!" />
    <h1>Products page</h1>
    <p>Welcome to products page</p>
    <Link to="/">Go back to the homepage</Link>
    { brands.map(b => <a href={b.url}>
      <img src={b.img} alt={b.name} />
    </a>) }
  </Layout>
)

export default SecondPage
