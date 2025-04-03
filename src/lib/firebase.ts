// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJy_1VM9PCaCXYUMEgeWvDPsMTnMj5OEk",
  authDomain: "m11-booking.firebaseapp.com",
  projectId: "m11-booking",
  storageBucket: "m11-booking.firebasestorage.app",
  messagingSenderId: "616794714284",
  appId: "1:616794714284:web:161b5b1de5aefbaddb6f09",
  measurementId: "G-N7Y5ZDRE3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
