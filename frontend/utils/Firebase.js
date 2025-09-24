import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-67660.firebaseapp.com",
  projectId: "loginonecart-67660",
  storageBucket: "loginonecart-67660.firebasestorage.app",
  messagingSenderId: "147982342607",
  appId: "1:147982342607:web:4a89adef1cd7a9585bdaba",
  measurementId: "G-1L0V4S5ZZS"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}