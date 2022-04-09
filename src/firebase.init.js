// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHrwZBWnQU15bT9tBWl7xQnmgyAZaYLXM",
  authDomain: "ema-john-auth-2dbf6.firebaseapp.com",
  projectId: "ema-john-auth-2dbf6",
  storageBucket: "ema-john-auth-2dbf6.appspot.com",
  messagingSenderId: "1047975334479",
  appId: "1:1047975334479:web:aea0ab109fc58299ce503a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
