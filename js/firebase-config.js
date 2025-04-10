// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmYOvxZW_XCP1IofYIOUAxz7c0AvMjwz8",
    authDomain: "we-rise-money.firebaseapp.com",
    projectId: "we-rise-money",
    storageBucket: "we-rise-money.firebasestorage.app",
    messagingSenderId: "93018409851",
    appId: "1:93018409851:web:9122e1090d806bc8f88bde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Configure Google provider
provider.setCustomParameters({
    prompt: 'select_account'
});

// Export auth and provider
window.auth = auth;
window.provider = provider;
window.signInWithPopup = signInWithPopup; 