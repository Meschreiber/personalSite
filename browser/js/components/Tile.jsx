import React from 'react'

const styles = {
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    width: '300px'
  },
  img: {
    height: '185px',
    width: '328px',
    borderRadius: '5%'
  }
};


const Tile = (props) => {
  const { img, title, link, blurb } = props
  return (
    <div style={styles.root}>
      <img src={img} style={styles.img} />
      <a href={link}><p>{title}</p></a>
      <p>{blurb}</p>
    </div>
  )
}

export default Tile
