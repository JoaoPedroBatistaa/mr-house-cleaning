// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getFirestore,
    query,
    where
} from "firebase/firestore";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJS8B8KbrJJnwAiZdGVvcx2OPjrWWrGp0",
    authDomain: "mr-house-80e1e.firebaseapp.com",
    projectId: "mr-house-80e1e",
    storageBucket: "mr-house-80e1e.firebasestorage.app",
    messagingSenderId: "96975545855",
    appId: "1:96975545855:web:3c31c6d873f6ebdc0673ca",
    measurementId: "G-LZY8W4HNQ3"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebase);
const storage = getStorage(firebase);


export {
    addDoc,
    auth,
    collection,
    db,
    doc,
    firebase,
    getDoc,
    getDownloadURL,
    query,
    ref,
    signInWithEmailAndPassword,
    signOut,
    storage,
    uploadBytesResumable, where
};

