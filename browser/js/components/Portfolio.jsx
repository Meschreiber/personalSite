import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const Portfolio = () => (
  <div id="portfolio" className="container">
    <div>
      <h3>My work</h3>
      <p>I've loved programming for a long time.  In middle school I taught myself HTML and CSS so I could make a good ol' Geocities page.  In high school, I graduated to studying C++ and Java.  My computer science skills lay dormant until I began taking online classes in Python, R, and SQL while working as a teacher.  The stack I am now most comfortable with is Node, Express,PostgresQl, React and Redux, though I am constantly learning new technologies.</p>
      <h1> INSERT HORIZONTAL SCROLLING GRIDBOX HERE </h1>
    </div>
  </div>
)

export default Portfolio
