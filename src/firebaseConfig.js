import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMoSO2-v0cLMQJddMfuYL-L7w17u0FFmo",
  authDomain: "gen-lang-client-0572328590.firebaseapp.com",
  projectId: "gen-lang-client-0572328590",
  storageBucket: "gen-lang-client-0572328590.firebasestorage.app",
  messagingSenderId: "782480574555",
  appId: "1:782480574555:web:ddbec0e2881ab9dca9977e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
