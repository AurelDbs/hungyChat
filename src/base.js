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
  apiKey: "AIzaSyBlIZQTbj4XG3BZ9qxfzeYDxXCKH5sTCAY",
  authDomain: "chatbox-app-911fe.firebaseapp.com",
  databaseURL: "https://chatbox-app-911fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatbox-app-911fe",
  storageBucket: "chatbox-app-911fe.appspot.com",
  messagingSenderId: "886857666083",
  appId: "1:886857666083:web:d221ef1b5df077e983ab96",
  measurementId: "G-J4NCGQJYL5"
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