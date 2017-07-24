import React from 'react'
import Topbar from './Topbar'
import Menu from './Menu'
import Background from './Background'
import Portfolio from './Portfolio'
import Etc from './Etc'
import Footer from './Footer'


const Main = () => (
  <div>
    <Topbar />
    <img src="../../images/rubberducks.jpg" alt="Duckies" style={{ width: 100 + '%' }} />
    <br />
    <Menu />
    <hr />
    <Background />
    <Portfolio />
    <Etc />
    <hr />
    <div className="simpleContainer" id="contact">
      <h3>Contact Me</h3>
      <p> If you'd like to contact me, please e-mail me at <a href="mailto:meschreiber3@gmail.com">meschreiber3@gmail.com</a>. I look forward to hearing from you. </p>
    </div>
    <hr />
    <Footer />
  </div>
)

export default Main
