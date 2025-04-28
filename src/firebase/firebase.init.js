// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe8Ra7RgEzAaIDrX9kb9lJPN405WjVoRU",
  authDomain: "mobileshop-da2a9.firebaseapp.com",
  projectId: "mobileshop-da2a9",
  storageBucket: "mobileshop-da2a9.firebasestorage.app",
  messagingSenderId: "530924267300",
  appId: "1:530924267300:web:4ae15e562743fa0445b5b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);