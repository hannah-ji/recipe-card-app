// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChPZ-3Ly-ac8YmG3R8TsHC_-0eN2k__2Y",
  authDomain: "react-recipe-app-6ab0b.firebaseapp.com",
  projectId: "react-recipe-app-6ab0b",
  storageBucket: "react-recipe-app-6ab0b.appspot.com",
  messagingSenderId: "619801540917",
  appId: "1:619801540917:web:a0a336fe75b362d39f347c",
  measurementId: "G-EDK0GE7CRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }