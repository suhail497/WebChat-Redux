import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDQe6FpDCR_32WgWHLukgfViIPratqZ_qI",
    authDomain: "webchat-3ad71.firebaseapp.com",
    databaseURL: "https://webchat-3ad71.firebaseio.com",
    projectId: "webchat-3ad71",
    storageBucket: "webchat-3ad71.appspot.com",
    messagingSenderId: "601849161998",
    appId: "1:601849161998:web:82b5725160ff321b598f5f",
    measurementId: "G-Q8Y7NXC1E0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { provider, auth }
export default db