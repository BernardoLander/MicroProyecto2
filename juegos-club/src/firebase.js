// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVEagE1jqANKnLOQLPYx4TnlNdLVNPLHE",
  authDomain: "microproyecto2-84f32.firebaseapp.com",
  databaseURL: "https://microproyecto2-84f32-default-rtdb.firebaseio.com",
  projectId: "microproyecto2-84f32",
  storageBucket: "microproyecto2-84f32.appspot.com",
  messagingSenderId: "801645733434",
  appId: "1:801645733434:web:fd9325827a565430c43703",
  measurementId: "G-EB9WEQ6BD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {auth, db};
