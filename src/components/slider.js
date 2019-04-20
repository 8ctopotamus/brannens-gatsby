import React from 'react'
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css"
import './slider.css'

const Slider = ({ images }) => {
  return (
    <ImageGallery 
      items={images}
      autoPlay={true}
      showPlayButton={false}
      showThumbnails={false}
      showFullscreenButton={false}
    />
  )
}

export default Slider