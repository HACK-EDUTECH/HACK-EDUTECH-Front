// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpnVEiWGfCkOSn1wYxXPPrpEy877yGEG0",
  authDomain: "hack-edutech.firebaseapp.com",
  databaseURL: "https://hack-edutech-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hack-edutech",
  storageBucket: "hack-edutech.appspot.com",
  messagingSenderId: "958187932299",
  appId: "1:958187932299:web:466203ebe220f93027a28e",
  measurementId: "G-T1G3Q5CKEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);