import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const {
  VITE_FIREBASE_API_KEY,
  ITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKENT,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_DATABASE_URL,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: ITE_FIREBASE_AUTH_DOMAIN,
  databaseURL:
    "https://innerharmony-691ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "innerharmony-691ae",
  storageBucket: "innerharmony-691ae.appspot.com",
  messagingSenderId: "724792447216",
  appId: "1:724792447216:web:ce49b77c440fae7756b235",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
