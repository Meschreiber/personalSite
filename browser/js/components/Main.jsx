import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

const Main = () => (
  <div>
    <Topbar />
    <img src="../../images/rubberducks.jpg" alt="Duckies" style={{width: 100 + '%'}} />
    <Footer />
  </div>
)

export default Main