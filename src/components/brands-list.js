import React from "react"

import './products.css'

const brandsList = [
  {
    name: 'Aervoe',
    url: 'https://aervoe.com', 
    img: 'aervoe-logo.png',
  },
  {
    name: 'CCI',
    url: '#',
    img: 'cci-logo.png',
  },
  {
    name: 'Dewalt',
    url: 'https://www.dewalt.com',
    img: 'dewalt-logo.png',
  },
  {
    name: 'Diablo',
    url: 'https://www.diablotools.com',
    img: 'diablo-logo.png',
  },
  {
    name: 'Driltec',
    url: 'https://www.driltec.com',
    img: 'driltec-logo.jpg',
  },
  {
    name: 'Grip Rite',
    url: 'https://www.grip-rite.com',
    img: 'grip-rite-logo.png',
  },
  {
    name: 'Lackmond',
    url: 'http://lackmond.com',
    img: 'lackmond-logo.png',
  },
  {
    name: 'Louisville Ladder',
    url: '#',
    img: 'louisville-ladder-logo.jpg',
  },
  {
    name: 'Makita',
    url: '#',
    img: 'makita-logo.jpg',
  },
  {
    name: 'Max',
    url: '#',
    img: 'max-logo.png',
  },
  {
    name: 'Metabo',
    url: '#',
    img: 'metabo-logo.jpg',
  },
  {
    name: 'Milwaukee',
    url: '#',
    img: 'milwaukee-logo.png',
  },
  {
    name: 'MK Morse',
    url: '#',
    img: 'mk-morse-logo.png',
  },
  {
    name: 'Powers',
    url: '#',
    img: 'powers-logo.jpg',
  },
  {
    name: 'Quik Drive',
    url: '#',
    img: 'quik-drive-logo.jpg',
  },
  {
    name: 'Rolair',
    url: '#',
    img: 'rolair-logo.jpg',
  },
  {
    name: 'Simpson',
    url: '#',
    img: 'simpson-logo.jpg',
  },
  {
    name: 'Stabila',
    url: '#',
    img: 'stabila-logo.png',
  },
  {
    name: 'Surface Shield',
    url: '#',
    img: 'surface-shield-logo.png',
  },
]

const brands = brandsList.map(b => {
  return { ...b, img: require(`../images/brand-logos/${b.img}`) }
})

const BrandsList = () => (
  <div className="brand-logos">
    { 
      brands.map(b => (
        <a href={b.url} 
           target={ b.url !== '#' ? '_blank' : '_self' }
           rel="noopener noreferrer"
           key={b.name}
        >
          <img src={b.img} alt={b.name} />
        </a>
      ))
    }
  </div>
)

export default BrandsList