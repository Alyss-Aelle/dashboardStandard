// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp_jkfjxxND-u4XKbWuW0XXeq_F9hXV_c",
  authDomain: "dashboard-b461d.firebaseapp.com",
  projectId: "dashboard-b461d",
  storageBucket: "dashboard-b461d.appspot.com",
  messagingSenderId: "650038919626",
  appId: "1:650038919626:web:293dbdcd588699b1cc8f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
export const auth = getAuth(app) ;
export default app;