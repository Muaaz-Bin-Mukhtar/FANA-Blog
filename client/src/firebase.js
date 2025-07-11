// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fana-blog.firebaseapp.com",
  projectId: "fana-blog",
  storageBucket: "fana-blog.firebasestorage.app",
  messagingSenderId: "419281685215",
  appId: "1:419281685215:web:31b81031c5bbee93ca376a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);