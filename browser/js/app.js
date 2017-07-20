import React from 'react'
import {
  fullblack, grey900
} from 'material-ui/styles/colors';
import ReactDOM from 'react-dom'
import '../stylesheets/index.scss'
import firebase from '../../fire/'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from './Routes'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


const muiTheme = getMuiTheme({
  fontFamily: 'Zilla Slab, sans-serif',
  palette: {
    textColor: grey900,
  },
  appBar: {
    height: 75,
  },
});


const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes />
  </MuiThemeProvider>
)


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
