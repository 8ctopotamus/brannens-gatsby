import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import austinMapImg from '../../images/contact-us/austin-map.jpg'
import conroeMapImg from '../../images/contact-us/conroe-map.jpg'
import sanAntonioMapImg from '../../images/contact-us/san-antonio-map.jpg'

const Contacto = () => (
  <Layout>
    <SEO
      title="Brannen's, Inc. Locations and Contact Info"
      description="Encuentre nuestras direcciones y números de teléfono de Austin, Conroe y San Antonio aquí para sus sujetadores, herramientas y suministros de construcción."
      lang="es"
    />
    
    <h1>Contacto</h1>

    <div className="page-content">

      <div className="contact-grid">
        <div className="grid-item">
          <h3>Austin</h3>
          <address>
            2627 Buell Avenue<br/>
            Austin, TX 78757-7627
          </address>
          <strong>Teléfono:</strong> (512) 458-4011<br/>
          <strong>Fax:</strong> (512) 454-7385<br/>
          <strong>Gerente:</strong> Bill Gannaway<br/>
          <strong>Email:</strong> billg@brannens.com
          <h4>Horas de servicio</h4>
          <strong>Lunes - Viernes:</strong> 7 am - 4:30 pm<br/>
          <strong>Sábado:</strong> 8 am - 12 pm
        </div>
        <div className="grid-item">
          <a href="https://goo.gl/maps/dKUe8Qi1Mq626oWv8" target="_blank" rel="noopener noreferrer">  
            <img src={ austinMapImg } alt="Austin map" />
          </a>
        </div>
      </div>

      <hr/>

      <div className="contact-grid">
        <div className="grid-item">
          <h3>Conroe</h3>
          <address>
            101 Amanda Street<br/>
            Conroe, TX 77304-2302
          </address>

          <strong>Teléfono:</strong> (936) 756-5299<br/>
          <strong>Fax:</strong> (936) 756-5298<br/>
          <strong>Gerente:</strong> Ty Collignon<br/>
          <strong>Email:</strong> ty@brannens.com<br/>
          <h4>Horas de servicio</h4>
          <strong>Lunes - Viernes:</strong> 7 am - 5 pm
          <strong>Sábado:</strong> 8 am - 12 pm
        </div>
        <div className="grid-item">
          <a href="https://goo.gl/maps/DcbYA1eeLqM2gBMb9" target="_blank" rel="noopener noreferrer">
            <img src={ conroeMapImg } alt="Conroe map" />
          </a>
        </div>
      </div>

      <hr/>

      <div className="contact-grid">
        <div className="grid-item">
          <h3>San Antonio</h3>
          <address>
            1835 Fredericksburg Road<br/>
            San Antonio, TX 78201-5039
          </address>
          <strong>Teléfono:</strong> (210) 736-1625<br/>
          <strong>Fax:</strong> (210) 736-1860<br/>
          <strong>Gerente:</strong> Robert Higle<br/>
          <strong>Email:</strong> robert@brannens.com<br/>
          <h4>Horas de servicio</h4>
          <strong>Lunes - Viernes:</strong> 7 am - 4:30 pm<br/>
          <strong>Sábado:</strong> 8 am - 12 pm
        </div>
        <div className="grid-item">
          <a href="https://goo.gl/maps/3Uy53P9PpXmQfjhL7" target="_blank" rel="noopener noreferrer">
            <img src={ sanAntonioMapImg } alt="San Antonio map" />
          </a>
        </div>
      </div>

    </div>
  </Layout>
)

export default Contacto
