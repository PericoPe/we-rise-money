// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8QJQJQJQJQJQJQJQJQJQJQJQJQJQJQJQ",
    authDomain: "we-rise-money.firebaseapp.com",
    projectId: "we-rise-money",
    storageBucket: "we-rise-money.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Inicializar Firebase
let firebaseApp;
try {
    if (!firebase.apps.length) {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        console.log('Firebase inicializado correctamente');
    } else {
        firebaseApp = firebase.app();
        console.log('Firebase ya estaba inicializado');
    }
} catch (error) {
    console.error('Error al inicializar Firebase:', error);
}

// Exportar la instancia de Firebase
window.firebaseApp = firebaseApp;

// Función para verificar la autenticación del usuario
function checkUserAuth(uid) {
    return new Promise((resolve, reject) => {
        if (!firebaseApp) {
            reject(new Error('Firebase no está inicializado'));
            return;
        }

        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user && user.uid === uid) {
                console.log('Usuario autenticado correctamente:', user.uid);
                resolve(user);
            } else {
                console.error('Usuario no autenticado o UID no coincide');
                reject(new Error('Usuario no autenticado'));
            }
        });
    });
}

// Exportar funciones necesarias
window.checkUserAuth = checkUserAuth; 