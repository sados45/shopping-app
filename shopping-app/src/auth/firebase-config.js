// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXzLFuRi0dzYQ6H4Ec4MR-3jsBMf36yQI",
  authDomain: "shop-27764.firebaseapp.com",
  projectId: "shop-27764",
  storageBucket: "shop-27764.appspot.com",
  messagingSenderId: "214376156578",
  appId: "1:214376156578:web:8279a7916c710e4dbef6fb",
  measurementId: "G-E48ZNY023R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }; 