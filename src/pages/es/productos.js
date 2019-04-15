import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BrandsList from '../../components/brands-list'

const Productos = () => (
  <Layout>
    <SEO
      title="Productos"
      description="Consulte a nuestros proveedores para sujetadores, herramientas y suministros aquí. ¡Tenemos marcas de renombre como DeWalt, Makita, Metabo y más!"
      lang="es"
    />
    <h1>Productos</h1>
    <div className="page-content">
      <BrandsList />
    </div>
  </Layout>
)

export default Productos
