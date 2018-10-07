import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC5sv9vmoJ4Iq9FQjRzGoY2LrXZNG1nlO4",
  authDomain: "saunter-68bb9.firebaseapp.com",
  databaseURL: "https://saunter-68bb9.firebaseio.com",
  projectId: "saunter-68bb9",
  storageBucket: "saunter-68bb9.appspot.com",
  messagingSenderId: "579531936562",
};

export default firebase.initializeApp(config);
