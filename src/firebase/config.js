// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3gmXdkywAsGBV7iR0JRuAIEnAGE2piDY",
  authDomain: "dekmates.firebaseapp.com",
  projectId: "dekmates",
  storageBucket: "dekmates.firebasestorage.app",
  messagingSenderId: "301985469352",
  appId: "1:301985469352:web:5a3b198998068614b9839d",
  measurementId: "G-5BRWEEFJ9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app,analytics};