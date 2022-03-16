// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref,onValue } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyT1jVPE9kuSKdx_P3v5fXIe4UpN2kzeI",
  authDomain: "leelavathieducationaltrust.firebaseapp.com",
  databaseURL: "https://leelavathieducationaltrust-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "leelavathieducationaltrust",
  storageBucket: "leelavathieducationaltrust.appspot.com",
  messagingSenderId: "81513841344",
  appId: "1:81513841344:web:c5d2bf20e220697dba6325",
  measurementId: "G-5H3CB98RXK"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
