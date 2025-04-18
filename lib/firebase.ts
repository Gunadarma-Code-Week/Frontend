// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_SECRET_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const firestore = getFirestore(app);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);
// const provider = new GoogleAuthProvider();
let analytics: Analytics | null = null;

// const analytics = getAnalytics(app);

if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export {
  app,
  analytics,
  // firestore,
  //  auth,
  //  db,
  //  storage,
  //  provider,
};
