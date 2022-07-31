import { initializeApp } from "firebase/app"
import { getFirestore, serverTimestamp } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAEpNzbG-wtLXvVdcv3D-PRlIQOyUl-_qk",
    authDomain: "clone-56ffd.firebaseapp.com",
    projectId: "clone-56ffd",
    storageBucket: "clone-56ffd.appspot.com",
    messagingSenderId: "679213489178",
    appId: "1:679213489178:web:76c4abf6abf5120f9705a3"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider()
const time = serverTimestamp();

export { db, auth, provider, time }