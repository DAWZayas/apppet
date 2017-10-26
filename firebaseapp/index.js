// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'apiKey',
  databaseURL: 'https://example.firebaseio.com',
  authDomain: 'example.firebaseapp.com',
  storageBucket: 'gs://example.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
