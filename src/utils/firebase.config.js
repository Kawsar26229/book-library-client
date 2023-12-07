// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl7SXOVTEXrdlkLJXGV-jv-vFyjWKXyHw",
  authDomain: "book-library-9b812.firebaseapp.com",
  projectId: "book-library-9b812",
  storageBucket: "book-library-9b812.appspot.com",
  messagingSenderId: "170868749822",
  appId: "1:170868749822:web:3afe06788f45f9140fbcaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app