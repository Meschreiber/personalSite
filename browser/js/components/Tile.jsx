import React from 'react'

const Tile = (props) => {
  const { img, title, link, blurb } = props
  return (
    <div className="col-sm col-md-4 tile">
      <img src={img}/>
      <h5><a href={link}>{title}</a></h5>
      <p>{blurb}</p>
    </div>
  )
}

export default Tile
