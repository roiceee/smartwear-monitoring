import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDy5p9F3Nt7yr9ei0rgSHili9SDbJrF8fc",
  authDomain: "smartwear-95f1f.firebaseapp.com",
  projectId: "smartwear-95f1f",
  storageBucket: "smartwear-95f1f.firebasestorage.app",
  messagingSenderId: "276627752121",
  appId: "1:276627752121:web:4f3cbea4c95f82d0c60768",
  measurementId: "G-08XLM96B3S",
  databaseURL:
    "https://smartwear-95f1f-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, app };
