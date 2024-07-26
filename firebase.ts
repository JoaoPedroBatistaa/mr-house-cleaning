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
    apiKey: "AIzaSyBtMYBxAzY1kT3Fy1lK2sEYhb-c5tU7q8s",
    authDomain: "mr-home-cleaning.firebaseapp.com",
    projectId: "mr-home-cleaning",
    storageBucket: "mr-home-cleaning.appspot.com",
    messagingSenderId: "764129205107",
    appId: "1:764129205107:web:0d27cdcb193eea51ab0306"
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

