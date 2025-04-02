// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export default app;
