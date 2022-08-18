// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJYv7-CKwRD0IXbvCfnRfH1XWMeUacql8",
  authDomain: "task-list-1f5e0.firebaseapp.com",
  projectId: "task-list-1f5e0",
  storageBucket: "task-list-1f5e0.appspot.com",
  messagingSenderId: "409535646510",
  appId: "1:409535646510:web:394edca33b43c02f9588bf",
  measurementId: "G-P7K7K46H4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export {
  firestore,
  auth
} 