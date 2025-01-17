import React from 'react'
import MenuItem from './MenuItem.jsx'

const menuInfo = [
  {
    id: 0,
    title: 'My Background',
    imageSrc: '../../images/ibBio2.png',
    imageAlt: 'students',
    blurb: 'teacher => learner => coder',
    link: 'background'
  },
  {
    id: 1,
    title: 'My Work',
    imageSrc: '../../images/code.png',
    imageAlt: 'computer',
    blurb: 'check out my portfolio',
    link: 'portfolio'
  },
  {
    id: 2,
    title: 'Etc.',
    imageSrc: '../../images/kitty.png',
    imageAlt: 'yoga',
    blurb: 'other things I am interested in',
    link: 'etc'
  }
]

const Menu = () => (
  <div id="menu">
    <h1>See what I'm all about...</h1>
    <div className="row">
      {
        menuInfo.map(item => {
          const { id, title, blurb, imageAlt, imageSrc, link } = item
          return (
            <MenuItem key={id} title={title} imageSrc={imageSrc} imageAlt={imageAlt} blurb={blurb} link={link} />
          )
        })
      }
    </div>
  </div>
)


export default Menu

