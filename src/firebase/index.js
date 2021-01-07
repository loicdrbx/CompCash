import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN-CKydWRnru8cCYxnkegmnLiJ7JkvlQk",
  authDomain: "project-compost.firebaseapp.com",
  projectId: "project-compost",
  storageBucket: "project-compost.appspot.com",
  messagingSenderId: "1059238678731",
  appId: "1:1059238678731:web:bf62427ac4718c29440b4e"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.firestore;
