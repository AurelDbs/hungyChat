// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

// import { getFirestore } from "firebase/firestore"
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb5eEVQeoPnIJ7brhd-Fa_XKlQKg93Rnw",
  authDomain: "hungrychat-app.firebaseapp.com",
  databaseURL: "https://hungrychat-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hungrychat-app",
  storageBucket: "hungrychat-app.appspot.com",
  messagingSenderId: "833585414800",
  appId: "1:833585414800:web:0b11cc1956d325a0bf8e15",
  measurementId: "G-MR3CWEB77C"
};

// Initialize Firebase

function initFirebase() {
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}

initFirebase();

export default firebaseConfig
export {firebase}