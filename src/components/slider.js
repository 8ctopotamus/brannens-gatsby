import React from 'react'
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css"
import './slider.css'

const Slider = ({ slides }) => {
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