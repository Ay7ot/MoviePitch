// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlddW8kB9iTZUcvtvHmjqfvAhRXDMR3uM",
  authDomain: "spandorpitcher.firebaseapp.com",
  projectId: "spandorpitcher",
  storageBucket: "spandorpitcher.appspot.com",
  messagingSenderId: "480438091747",
  appId: "1:480438091747:web:1370a91ad6aba915deead6",
  measurementId: "G-3W8J7L395Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { app, analytics, db }