// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-hwYDz4n5w80f5V-iUt5sAfmjclDkuuA",
    authDomain: "portfolio-9cd55.firebaseapp.com",
    databaseURL: "https://portfolio-9cd55-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-9cd55",
    storageBucket: "portfolio-9cd55.firebasestorage.app",
    messagingSenderId: "265388060433",
    appId: "1:265388060433:web:ba34930519ea0371f326b0",
    measurementId: "G-8ZS3ZLVSDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
