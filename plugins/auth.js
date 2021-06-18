import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyCqoXIwxCQJOuFJL_SbDJy9ajRxjyZ0hNk',
  authDomain: 'facz-f5e6b.firebaseapp.com',
  projectId: 'facz-f5e6b',
  storageBucket: 'facz-f5e6b.appspot.com',
  messagingSenderId: '237557740465',
  appId: '1:237557740465:web:7bcfc1888d1c308eed0390',
  measurementId: 'G-8P7VPMEXZ7'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth()

export default auth;