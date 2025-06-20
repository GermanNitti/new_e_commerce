import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS6zpL6PF51vp20IboQjQ7GyNcYGPqv04",
  authDomain: "my-ecommerce-b315e.firebaseapp.com",
  projectId: "my-ecommerce-b315e",
  storageBucket: "my-ecommerce-b315e.firebasestorage.app",
  messagingSenderId: "269036085987",
  appId: "1:269036085987:web:31fc5a06589fde4d555bd6",
  measurementId: "G-7352B8NMPT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
