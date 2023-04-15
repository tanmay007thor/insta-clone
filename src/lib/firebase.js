import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBaYUgR-cH9sWdqSdN1uT5mcine9JXsEEw",
  authDomain: "instagram-132a9.firebaseapp.com",
  projectId: "instagram-132a9",
  storageBucket: "instagram-132a9.appspot.com",
  messagingSenderId: "490363391090",
  appId: "1:490363391090:web:9604c638b1ea8f43fd86eb",
};

const firebaseApp = firebase.initializeApp(config);
const { FieldValue } = firebaseApp.firestore;

console.log("firebase", firebase);
// seedDatabase(firebase)
export { firebaseApp, FieldValue };
