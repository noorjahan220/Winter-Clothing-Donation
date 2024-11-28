// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrgBLr7lHVzNjOkkWXtJWA-7_z_8KIBn4",
  authDomain: "winter-clothing-donation-72fcc.firebaseapp.com",
  projectId: "winter-clothing-donation-72fcc",
  storageBucket: "winter-clothing-donation-72fcc.firebasestorage.app",
  messagingSenderId: "350317974540",
  appId: "1:350317974540:web:ba276c95b616f929254a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
