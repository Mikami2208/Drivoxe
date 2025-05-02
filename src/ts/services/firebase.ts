// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZG1gZshzeDlgc5pA2BpzbcpITweJHJA8",
  authDomain: "drivoxe-ca061.firebaseapp.com",
  databaseURL: "https://drivoxe-ca061-default-rtdb.firebaseio.com",
  projectId: "drivoxe-ca061",
  storageBucket: "drivoxe-ca061.firebasestorage.app",
  messagingSenderId: "190919517608",
  appId: "1:190919517608:web:3425de57e49624d835699d",
  measurementId: "G-ERD411MVZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)