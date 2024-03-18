// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIFgeCfaokDuKqvo2hhJS9ncp9eJoJ4F4",
  authDomain: "innerharmony-691ae.firebaseapp.com",
  databaseURL:
    "https://innerharmony-691ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "innerharmony-691ae",
  storageBucket: "innerharmony-691ae.appspot.com",
  messagingSenderId: "724792447216",
  appId: "1:724792447216:web:ce49b77c440fae7756b235",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
