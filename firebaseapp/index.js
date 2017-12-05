// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAJDgY_XF9J8Go4q718uEnddTgunTi__aA',
  databaseURL: 'https://apppet-8bb63.firebaseio.com',
  authDomain: 'apppet-8bb63.firebaseapp.com',
  storageBucket: 'apppet-8bb63.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
