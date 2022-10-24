// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFEM8-xXIaReSCaSkRL9xuDzxON8m4oW4",
    authDomain: "iium-freelance.firebaseapp.com",
    projectId: "iium-freelance",
    storageBucket: "iium-freelance.appspot.com",
    messagingSenderId: "145821165609",
    appId: "1:145821165609:web:0501a3d14696d079871438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;