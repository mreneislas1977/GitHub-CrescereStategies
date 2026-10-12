import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9RdUJiQdgIswe90192UwJc77Q0QNwE1s",
  authDomain: "crescere-strategies-official.firebaseapp.com",
  projectId: "crescere-strategies-official",
  storageBucket: "crescere-strategies-official.firebasestorage.app",
  messagingSenderId: "627030636854",
  appId: "1:627030636854:web:593f2845ff5d9607339b97"
};

// Prevent duplicate initialization during Next.js client-side re-renders
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
