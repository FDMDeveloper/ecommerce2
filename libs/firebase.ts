// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmWo2WYv-olqVtt2ftKIqcGIjnefEHJM",
  authDomain: "smarttechshop-vid.firebaseapp.com",
  projectId: "smarttechshop-vid",
  storageBucket: "smarttechshop-vid.appspot.com",
  messagingSenderId: "431070315493",
  appId: "1:431070315493:web:0d32d23f98048f4363250c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
