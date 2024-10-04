// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA7K-maGqQL3M4nctHVH6MPSU_YcytWL7Y",
    authDomain: "rct-resume-signup.firebaseapp.com",
    databaseURL: "https://rct-resume-signup-default-rtdb.firebaseio.com",
    projectId: "rct-resume-signup",
    storageBucket: "rct-resume-signup.appspot.com",
    messagingSenderId: "871506286767",
    appId: "1:871506286767:web:0abec7461908d329d79c5a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Initialize Realtime Database

export { auth, database };
