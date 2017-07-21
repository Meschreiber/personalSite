import React from 'react'

const MenuItem = (props) => {
  const { title, blurb, imageAlt, imageSrc, link } = props
  return (
    <div className="center menuItem col-md-4 col-sm">
      <a href={`#${link}`}>
        <h2>{title}</h2>
        <img className="img-circle" src={imageSrc} alt={imageAlt} />
        <p>{blurb}</p>
      </a>
    </div>
  )
}

export default MenuItem
