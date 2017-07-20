import React from 'react'
import MenuItem from './MenuItem.jsx'

const menuInfo = [
  {
    title: 'My Background',
    imageSrc: '../../images/ibbio.png',
    imageAlt: 'students',
    blurb: 'teacher => learner => coder',
    link: 'background'
  },
  {
    title: 'My Work',
    imageSrc: '../../images/code.png',
    imageAlt: 'computer',
    blurb: 'check out my portfolio',
    link: 'portfolio'
  },
  {
    title: 'Etc.',
    imageSrc: '../../images/kitty.png',
    imageAlt: 'yoga',
    blurb: 'other things I am interested in',
    link: 'etc'
  }
]

const Menu = () => (
  <div className="container">
    {
      menuInfo.map(item => {
        const { title, blurb, imageAlt, imageSrc, link } = item
        return (
          <MenuItem title={title} imageSrc={imageSrc} imageAlt={imageAlt} blurb={blurb} link={link} />
        )
      })
    }
  </div>
)

export default Menu

