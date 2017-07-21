import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
};

const tilesData = [
  {
    img: '../../images/etc/yoga.png',
    title: 'Real hot yoga'
  },
  {
    img: '../../images/etc/waterfall.png',
    title: 'Huerquehue, Chile'
  },
  {
    img: '../../images/etc/bolivia.png',
    title: 'Salt flat fun'
  },
  {
    img: '../../images/etc/surf.png',
    title: 'Pichilemu surf'
  },
  {
    img: '../../images/etc/ferero.png',
    title: 'Ferrero Rocher cake'
  },
  {
    img: '../../images/etc/lemon.png',
    title: 'Olive oil lemon cake'
  },
  {
    img: '../../images/etc/apple.png',
    title: 'Apple thyme tarte',
  },
  {
    img: '../../images/etc/bread.png',
    title: 'Sourdough bread',
  },
  {
    img: '../../images/etc/cherry.png',
    title: 'Cherry clafoutis'
  },
  {
    img: '../../images/etc/pineapple.png',
    title: 'Pineapple banana cake'
  },
  {
    img: '../../images/etc/lola.png',
    title: 'Lola Facetime'
  },
];

const Etc = () => (
  <div id="etc" className="container">
    <div >
      <h3>Etc.</h3>
      <p>These are some some additional things I love spending time on:</p>
      <ul>
        <li>Yoga 🙏🏼</li>
        <li>Hiking ⛰ </li>
        <li>Travelling, especially roadtrips 🚗</li>
        <li>Learning how to surf 🏄🏻‍♀️ </li>
        <li>Cooking and baking -- the more time-consuming, the better 🍰 </li>
        <li>My cat Lola 😻</li>
      </ul>
      <p> Scroll through some of my loves and creations below. </p>
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  </div>
)

export default Etc
