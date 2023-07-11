import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2JD3iL4vrxtftdfj-EwpjojjQAeiLUz4",
  authDomain: "ayur-3f74f.firebaseapp.com",
  projectId: "ayur-3f74f",
  storageBucket: "ayur-3f74f.appspot.com",
  messagingSenderId: "155418320480",
  appId: "1:155418320480:web:065970788fdcbcfadaed05",
  measurementId: "G-CVCZ1PSKQT",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
