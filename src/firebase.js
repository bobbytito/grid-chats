// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9TcnzADxajqwjUlvyPE02kVCJxRP6wAE",
  authDomain: "grid-tweets.firebaseapp.com",
  databaseURL: "https://grid-tweets.firebaseio.com",
  projectId: "grid-tweets",
  storageBucket: "grid-tweets.appspot.com",
  messagingSenderId: "1007565695274",
  appId: "1:1007565695274:web:d6de813ae830bb1be8d653",
  measurementId: "G-642BHSP973"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;