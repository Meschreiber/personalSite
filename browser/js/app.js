import React from 'react'
import ReactDOM from 'react-dom'
import '../stylesheets/index.scss'
import * as firebase from 'firebase'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941


injectTapEventPlugin()

const config = {
  apiKey: '<API_KEY>',
  authDomain: '<PROJECT_ID>.firebaseapp.com',
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
  storageBucket: '<BUCKET>.appspot.com',
  messagingSenderId: '<SENDER_ID>',
}
firebase.initializeApp(config)


const App = () => (
  <MuiThemeProvider>
    <div>Good morning, world.  I'm working on it.</div>
  </MuiThemeProvider>
)


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
