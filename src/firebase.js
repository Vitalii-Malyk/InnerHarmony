import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBtJ5GQzzjAjQAVdZnjlZZZrklaosq7OyE",
  authDomain: "innerharmony-31976.firebaseapp.com",
  databaseURL:
    "https://innerharmony-31976-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "innerharmony-31976",
  storageBucket: "innerharmony-31976.appspot.com",
  messagingSenderId: "773945255098",
  appId: "1:773945255098:web:6633066728451267744e83",
  measurementId: "G-TK304FEDWN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
