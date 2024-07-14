import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiRZIkHD2CodzhU5bQKYPToQ8pA6T6yWg",
    authDomain: "react-laptops-d1b65.firebaseapp.com",
    projectId: "react-laptops-d1b65",
    storageBucket: "react-laptops-d1b65.appspot.com",
    messagingSenderId: "134027708505",
    appId: "1:134027708505:web:bde7e740fdbb0d5143c948",
    measurementId: "G-BPK3Z71129"
};



// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };