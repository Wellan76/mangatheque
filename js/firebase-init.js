// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzNmAnKqd24LTLx4OU8haEAHiSKty5e84",
  authDomain: "mangatheque-1bd12.firebaseapp.com",
  databaseURL: "https://mangatheque-1bd12-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mangatheque-1bd12",
  storageBucket: "mangatheque-1bd12.firebasestorage.app",
  messagingSenderId: "279312890571",
  appId: "1:279312890571:web:0040ea26bba3ddbb06b94e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
