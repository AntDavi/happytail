import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_API_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_API_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_API_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
