// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4-EPN57v0vocLNlnZnNugGNXQVSSrWhA",
  authDomain: "rematdatabase.firebaseapp.com",
  projectId: "rematdatabase",
  storageBucket: "rematdatabase.firebasestorage.app",
  messagingSenderId: "403393420076",
  appId: "1:403393420076:web:1bd40a34f0383dfb74ea89",
  measurementId: "G-1EYT8SZ40C"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

export {app, auth, googleProvider, db}