import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAn4CPzqgshfUpobU0Yvo7Olz0jfgYTEgM",
  authDomain: "dusan-73d06.firebaseapp.com",
  projectId: "dusan-73d06",
  storageBucket: "dusan-73d06.appspot.com",
  messagingSenderId: "597292483528",
  appId: "1:597292483528:web:25c97381eb496585f336fd",
  measurementId: "G-EBVWBZRT93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { db, auth, analytics };
