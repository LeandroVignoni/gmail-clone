import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1Or6efA2EvUA6d7zqal5gAPoeT8THBhs",
  authDomain: "clone-e3c78.firebaseapp.com",
  projectId: "clone-e3c78",
  storageBucket: "clone-e3c78.appspot.com",
  messagingSenderId: "51083065047",
  appId: "1:51083065047:web:4b090dbfc28a7bf6f3e292",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //connect the front and back
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
