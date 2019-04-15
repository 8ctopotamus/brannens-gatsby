import React from 'react'

import './home-logos.css'

import louisvilleLogo from '../images/brand-logos/louisville-ladder-logo.jpg'
import dewaltLogo from '../images/brand-logos/dewalt-logo.png'
import metaboLogo from '../images/brand-logos/metabo-logo.jpg'
import mikataLogo from '../images/brand-logos/makita-logo.jpg'

const HomeLogos = () => (
  <div className="home-logos">
    <img src={ louisvilleLogo } alt="Louisville ladder" />
    <img src={ mikataLogo } alt="Mikata" />
    <img src={ metaboLogo } alt="Metabo" />
    <img src={ dewaltLogo } alt="Dewalt" />
  </div>
)

export default HomeLogos