import React from 'react'

const MenuItem = (props) => {
  const { title, blurb, imageAlt, imageSrc } = props
  return (
    <div className="menuItem">
      <a href="">
        <h2>{title}</h2>
        <img className="img-circle" src={imageSrc} alt={imageAlt} />
        <p>{blurb}</p>
      </a>
    </div>
  )
}

export default MenuItem
