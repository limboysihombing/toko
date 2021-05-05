import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyABnxhYEz290NmT--ddjn9T3zCQY7lQRPk",
  authDomain: "kado-42588.firebaseapp.com",
  projectId: "kado-42588",
  storageBucket: "kado-42588.appspot.com",
  messagingSenderId: "1031679774985",
  appId: "1:1031679774985:web:14286b3c02dcb0bef603d8",
  measurementId: "G-0JXM0S6WKR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()
