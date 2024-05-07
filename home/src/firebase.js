import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-104ed.firebaseapp.com",
  projectId: "home-104ed",
  storageBucket: "home-104ed.appspot.com",
  messagingSenderId: "959430415353",
  appId: "1:959430415353:web:d09f27c631d5bc5f25a328",
  measurementId: "G-039ZNYMHSK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
