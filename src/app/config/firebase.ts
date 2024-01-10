// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2024-2631a.firebaseapp.com",
  projectId: "revents-2024-2631a",
  storageBucket: "revents-2024-2631a.appspot.com",
  messagingSenderId: "406449325742",
  appId: "1:406449325742:web:b439067bd66dd2cd410f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);