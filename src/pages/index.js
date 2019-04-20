import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLogos from '../components/home-logos'
import Slider from '../components/Slider'

const images = [
  {
    original: 'slideshow/slideshow.jpg',
    thumbnail: 'slideshow/slideshow.jpg',
  },
  {
    original: 'slideshow/slideshow0.jpg',
    thumbnail: 'slideshow/slideshow0.jpg',
  },
  {
    original: 'slideshow/slideshow2.jpg',
    thumbnail: 'slideshow/slideshow2.jpg'
  },
  {
    original: 'slideshow/slideshow3.jpg',
    thumbnail: 'slideshow/slideshow3.jpg'
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
      keywords={[
        `fasteners`,
        `construction`,
        `tools`,
      ]}
    />
    <Slider images={ images } />
    <h1>Top Products</h1>
    <div className="page-content">
      <HomeLogos />
    </div>
  </Layout>
)

export default IndexPage
