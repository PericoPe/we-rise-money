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
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Configure Google provider
provider.setCustomParameters({
    prompt: 'select_account'
});

// Export auth and provider
window.auth = auth;
window.provider = provider; 