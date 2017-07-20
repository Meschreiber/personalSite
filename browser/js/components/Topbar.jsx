import React from 'react'
import AppBar from 'material-ui/AppBar'
import {
  fullblack, grey900
} from 'material-ui/styles/colors'


const Topbar = () => (
    <AppBar
      className="head"
      title="Maria Schreiber"
      style={{backgroundColor: grey900, fontFamily: 'PT Sans'}}
      iconElementLeft={<span/>}
      iconStyleLeft={{textAlign: 'center'}}
    />
)

export default Topbar
