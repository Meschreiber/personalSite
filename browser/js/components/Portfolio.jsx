import React from 'react'
import Tile from './Tile'

const tilesData = [
  {
    img: '../../images/portfolio/adventure.png',
    title: 'adventureUs',
    link: 'https://github.com/adventureUs/weTravel',
    blurb: 'adventureUs is a place where you can virtually meet up with your buddies and plan your next great adventure together. The web app was built using React.js and Firebase.'
  },
  {
    img: '../../images/portfolio/visualization.jpg',
    title: 'Pair Programming Feedback',
    link: 'https://fir-a38e9.firebaseapp.com/feedback/week/1',
    blurb: 'At Grace Hopper we pair programmed on a near daily basis and were frequenly asked to give feedback about the pairing.  That feedback went into a blackbox, never to be seen again.  This React D3 visualizer shows how feedback could be shared with your partner.'
  },
  {
    img: '../../images/portfolio/EDAwR.png',
    title: 'Intro to EDA in R',
    link: 'https://www.youtube.com/watch?v=L2rCJFX_QA8',
    blurb: 'This short video gives an overview of the big data analysis process and of the R programming language. The majority of the video is spent in RStudio, explaining the basic functionality of the GUI and demonstrating basic commands that allow you to explore large data sets.  In particular the NYC Open Data housing complaints data set is explored.'
  },
  {
    img: '../../images/portfolio/enron.png',
    title: 'Enron Fraud Detection',
    link: 'https://github.com/Meschreiber/Enron-ML-Classifier',
    blurb: "These scripts implemented Python’s scikit-learn library to optimize a machine learning algorithm to detect employee fraud in a dataset of Enron employees.  Various classification algorithms (naïve-Bayes, kNN, random forest, stochastic gradient descent, adaboost) were compared and optimized using GridSearchCV."
  },
  {
    img: '../../images/portfolio/campaign.png',
    title: '2016 Campaign Contributions',
    link: '../../campaign.html',
    blurb: 'Intrigued by data released by the FEC after the 2016 presidential election, I used the R programming language to discover trends, some surprising, some not, in contribution amounts, timing, and donors.'
  },
  {
    img: '../../images/portfolio/OSM.png',
    title: 'OSM Data Wrangling',
    link: 'https://github.com/Meschreiber/OSM-Santiago',
    blurb: 'This is a thorough cleaning and casual querying of data from https://www.openstreetmap.org on Santiago, Chile.  A variety of data munging techniques were implemented in Python and the quality of the data was assessed on validity, accuracy, completeness, consistency and uniformity. SQL querying revealed that most of the data were concentrated in wealthier neighborhoods.'
  }
];

const Portfolio = () => (
  <div id="portfolio" className="container">
    <div className="row">
      <div className="col-md-12">
        <h3>My work</h3>
        <p>I've loved programming for a long time.  In middle school I taught myself HTML and CSS so I could make a good ol' Geocities page.  In high school, I graduated to studying <b>C++</b> and <b>Java</b>.  My computer science skills lay dormant until I began taking online classes in <b>Python, R</b>, and <b>SQL</b> while working as a teacher.  The stack I am now most comfortable with is <b>Node, Express, PostgresQl, React and Redux</b>, though I am constantly learning new technologies.  Check out some of my projects below.</p>
        <br />
        <div className="row">
          {tilesData.map((tile) => (
            <Tile
              key={tile.img}
              img={tile.img}
              title={tile.title}
              link={tile.link}
              blurb={tile.blurb}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
