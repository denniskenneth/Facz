/* eslint-disable semi */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: 'AIzaSyCqoXIwxCQJOuFJL_SbDJy9ajRxjyZ0hNk',
  authDomain: 'facz-f5e6b.firebaseapp.com',
  projectId: 'facz-f5e6b',
  storageBucket: 'facz-f5e6b.appspot.com',
  messagingSenderId: '237557740465',
  appId: '1:237557740465:web:7bcfc1888d1c308eed0390',
  measurementId: 'G-8P7VPMEXZ7'
}
// Initialize Firebase
// let app = null
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

db.settings(
  {
    merge: true
  });

export default db;
