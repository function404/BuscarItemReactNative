// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1AyQa-LWXrSk2xCQd3PQeoRNFcBM_Sjg",
  authDomain: "info-lincoln.firebaseapp.com",
  projectId: "info-lincoln",
  storageBucket: "info-lincoln.appspot.com",
  messagingSenderId: "464355307646",
  appId: "1:464355307646:web:fd4a724a7664c34a59282f"
};

/**
 * Initialize Firebase
 */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };