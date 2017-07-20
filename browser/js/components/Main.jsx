import React from 'react'
import Topbar from './Topbar'
import Menu from './Menu'
import Footer from './Footer'


const Main = () => (
  <div>
    <Topbar />
    <img src="../../images/rubberducks.jpg" alt="Duckies" style={{width: 100 + '%'}} />
    <br/>
    <h1>See what I'm all about...</h1>
    <Menu />
    <hr />
    <Footer />
  </div>
)

export default Main