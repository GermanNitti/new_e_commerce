// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS6zpL6PF51vp20IboQjQ7GyNcYGPqv04",
  authDomain: "my-ecommerce-b315e.firebaseapp.com",
  projectId: "my-ecommerce-b315e",
  storageBucket: "my-ecommerce-b315e.firebasestorage.app",
  messagingSenderId: "269036085987",
  appId: "1:269036085987:web:31fc5a06589fde4d555bd6",
  measurementId: "G-7352B8NMPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);