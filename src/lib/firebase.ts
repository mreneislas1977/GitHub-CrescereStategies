import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9RdUJiQdgIswe90192UwJc77Q0QNwE1s",
  authDomain: "crescere-strategies-official.firebaseapp.com",
  projectId: "crescere-strategies-official",
  storageBucket: "crescere-strategies-official.firebasestorage.app",
  messagingSenderId: "627030636854",
  appId: "1:627030636854:web:593f2845ff5d9607339b97"
};

// Initialize Firebase (using a check to prevent double-initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore (This is what the form needs!)
const db = getFirestore(app);

// Export the database so the Insights page can use it
export { db };
