// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7xgrmmB1aqu3ZU0cn7kpjWwqz6wqy7hc",
  authDomain: "react-native-auth-e7362.firebaseapp.com",
  projectId: "react-native-auth-e7362",
  storageBucket: "react-native-auth-e7362.firebasestorage.app",
  messagingSenderId: "313284614736",
  appId: "1:313284614736:web:5fd7eb3151ce993bb18f55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
