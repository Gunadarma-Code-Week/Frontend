// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_SECRET_KEY as string,
  authDomain: "gunadarma-code-week.firebaseapp.com",
  projectId: "gunadarma-code-week",
  storageBucket: "gunadarma-code-week.firebasestorage.app",
  messagingSenderId: "483351822577",
  appId: "1:483351822577:web:843bfb7229402254bb2950",
  measurementId: "G-X97JHV60BK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
