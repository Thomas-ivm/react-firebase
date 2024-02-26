// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYe6EUFp8hhTrWnj1ZEIECRvgNaukWjQ",
  authDomain: "react-firebase-test-90b21.firebaseapp.com",
  projectId: "react-firebase-test-90b21",
  storageBucket: "react-firebase-test-90b21.appspot.com",
  messagingSenderId: "382287224063",
  appId: "1:382287224063:web:62ed0ab010c51bb7bcc0ca",
  measurementId: "G-HH37X1VDXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)