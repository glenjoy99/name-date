import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBXyrSIRBdw2J8Zcyq6bX21ovyX_bfBXHI",
    authDomain: "name-app-f390d.firebaseapp.com",
    projectId: "name-app-f390d",
    storageBucket: "name-app-f390d.appspot.com",
    messagingSenderId: "938047947808",
    appId: "1:938047947808:web:bea745854e0e008879e845",
    measurementId: "G-PGXX44LK6K"
  });
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  firebase.analytics();

  export default firebaseConfig;