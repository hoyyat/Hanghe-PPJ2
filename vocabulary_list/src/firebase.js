// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9QhIGOf2LWGU1WO3-fnXB-DKPEyj9Mwg",
  authDomain: "word-list-7e426.firebaseapp.com",
  projectId: "word-list-7e426",
  storageBucket: "word-list-7e426.appspot.com",
  messagingSenderId: "638802493832",
  appId: "1:638802493832:web:75cb586351a891f898ba3d",
  measurementId: "G-8965P0W61L"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();