import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import aboutUsImg from '../images/about-us/about-us.jpg'
import storeImg1 from '../images/about-us/store1.jpg'
import storeImg2 from '../images/about-us/store2.jpg'

const AboutUs = () => (
  <Layout>
    <SEO title="About Brannen's Fastener, Tool, & Supply Company" description="Since our inception almost six decades ago, Brannen's has taken pride in delivering the highest quality and best value to our customers." />

    <h1>About Us</h1>

    <div className="page-content">
      <img src={ aboutUsImg } alt="The Brannens" style={{float: 'left', margin: '0 10px 10px 0'}} />
      <p>Since our inception almost six decades ago, Brannen's has taken pride in delivering the highest quality and best value to our customers. This philosophy has helped us grow into an industry leader, distributing a wide range of fasteners, tools, and supplies for the Texas on-site construction industry as well as a variety of manufacturers throughout Texas.</p>
      <p>As our many satisfied customers have come to know, Brannen's offers not only products and service on which you can depend, but also convenient, cost-effective partnership that will help your business succeed.</p>
      <p>We hope you enjoy learning more about Brannen's. The accompanying advertisements from our valued suppliers enhance the picture of who we are, and we thank them for their support in the development of this project.</p>

      <hr/>

      <h2>BRANNEN'S INC.</h2>
      <img src={ storeImg1 } alt="Brannen's store" style={{float: 'right', margin: '0 0 10px 10px'}} />
      <p>Brannen's Inc. is a leading Texas distributor of fasteners, tools, and a full range of supplies for the on-site construction industry as well as the manufacturing community.  Our "golden rule" service has made us successful for decades.</p>
      <p>Fred Brannen, a former Air Force pilot, started the company in 1947 as an Army surplus store in San Antonio, Texas.  By 1952, the company had evolved into a full-line distributor of on-site construction products, our core business today.  We still operate at our original San Antonio location and have added two additional stores in Austin and Conroe Texas.</p>
      <p>As we expanded over the years, we grew to the point where we needed a centralized distribution center. We constructed our modern "DC" on a 13-acre site in McDade, Texas, with plenty of room for growth. Many of our administrative functions are centralized at this site as well. Today the second generation of the Brannen family runs the business, assisted by up and coming third generation family members. The company "family" also includes our employees and our many loyal customers.</p>
      <p>At Brannen's, our complete inventory, competitive prices, and personal service make us the supplier of choice for anyone needing fasteners, tools, and construction supplies.  Once you become part of our "family", you'll never shop anywhere else.</p>

      <hr/>

      <h2>PERSONAL SERVICE</h2>
      <img src={ storeImg2 } alt="Brannen's store" style={{float: 'left', margin: '0 10px 10px 0'}} />
      <p>Brannen's believes in doing business the old-fashioned way. We know from experience that personal service is the best way to deal with our customers. When you come in to one of our stores, you'll always be helped by a knowledgeable experienced Brannen's employee, someone interested in helping you find just the right product for the job, not a "cookie-cutter" solution.</p>
      <p>Brannen's three generations of family leadership assures a continuity of our vision for "golden rule" service.  We also have long-time employees on our staff proud to contribute their many years of experience, expertise, and insights. Some of our people have been with us for more than thirty years. All of us have the training and dedication to assure that you get exactly what you need, delivered when and where you need it. We take pride in finding cost effective solutions. As a distributor for leading fastening manufacturers, we have a wealth of options available to us to best accommodate your needs, and we make it our business to help you keep your projects running problem-free.</p>
    </div>
  </Layout>
)

export default AboutUs
