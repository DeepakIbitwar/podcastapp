// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfPh1jAV_hToMof7bFV9I9yU6CES3Hy8k",
  authDomain: "podcast-app-c0821.firebaseapp.com",
  projectId: "podcast-app-c0821",
  storageBucket: "podcast-app-c0821.appspot.com",
  messagingSenderId: "384823785740",
  appId: "1:384823785740:web:7cf1edcc185dcdc01c7129",
  measurementId: "G-TLS6X0VCHQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };