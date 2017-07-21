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
    <img src="../../images/rubberducks.jpg" alt="Duckies" style={{width: 100 + '%'}} />
    <br/>
    <Menu />
    <hr />
    <Background />
    <Portfolio />
    <Etc />
    <hr />
    <Footer />
  </div>
)

export default Main
