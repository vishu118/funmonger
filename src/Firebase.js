// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm7Yw8u5qhOy_dnk2Kv_KSoyB9aYfYF1w",
    authDomain: "funmonger-27434.firebaseapp.com",
    projectId: "funmonger-27434",
    storageBucket: "funmonger-27434.appspot.com",
    messagingSenderId: "417992271882",
    appId: "1:417992271882:web:0a2881d39a323e152f57f3"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// signInWithRedirect(auth, provider);