import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import austinMapImg from '../images/contact-us/austin-map.jpg'
import conroeMapImg from '../images/contact-us/conroe-map.jpg'
import sanAntonioMapImg from '../images/contact-us/san-antonio-map.jpg'

const ContactUs = () => (
  <Layout>
    <SEO title="Brannen's, Inc. Locations and Contact Info" description="Find our Austin, Conroe, and San Antonio addresses and phone numbers here for your fasteners, tools, and construction supplies." />

    <h1>Contact Us</h1>

    <div className="page-content">
      Austin
      2627 Buell Avenue
      Austin, TX 78757-7627

      Phone: (512) 458-4011
      Fax: (512) 454-7385
      Manager: Bill Gannaway
      Email: billg@brannens.com
      Hours
      Mon-Fri: 7 am - 4:30 pm
      Sat: 8 am - 12 pm

      <img src={ austinMapImg } alt="Austin map" />

      <hr/>
      Conroe
      101 Amanda Street
      Conroe, TX 77304-2302

      Phone: (936) 756-5299
      Fax: (936) 756-5298
      Manager: Ty Collignon
      Email: ty@brannens.com
      Hours
      Mon-Fri: 7 am - 5 pm
      Sat: 8 am - 12 pm

      <img src={ conroeMapImg } alt="Conroe map" />

      <hr/>

      San Antonio
      1835 Fredericksburg Road
      San Antonio, TX 78201-5039

      Phone: (210) 736-1625
      Fax: (210) 736-1860
      Manager: Robert Higle
      Email: robert@brannens.com
      Hours
      Mon-Fri: 7 am - 4:30 pm
      Sat: 8 am - 12 pm

      <img src={ sanAntonioMapImg } alt="San Antonio map" />
    </div>
  </Layout>
)

export default ContactUs
