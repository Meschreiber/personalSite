const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
var config = {
    apiKey: 'AIzaSyA6vUfurIJg1I2fV6URDH3PbBNQK7kGsRo',
    authDomain: 'personal-8ec82.firebaseapp.com',
    databaseURL: 'https://personal-8ec82.firebaseio.com',
    projectId: 'personal-8ec82',
    storageBucket: 'personal-8ec82.appspot.com',
    messagingSenderId: '22226908616'
  };
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__personal || (firebase.__personal = firebase.initializeApp(config))

module.exports = firebase
