
'use strict'
import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Main from './components/Main'

const Routes = () => (
  <Router>
  <Route component={Main} />
  </Router>
)

export default Routes
