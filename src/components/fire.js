import firebase from "firebase";
import "firebase/firestore";

var config = {
    apiKey: "AIzaSyAWrjm2xDh9t9-uuWzV7rKD7fMxpR8Jp8E",
    authDomain: "queue-5d272.firebaseapp.com",
    databaseURL: "https://queue-5d272.firebaseio.com",
    projectId: "queue-5d272",
    storageBucket: "queue-5d272.appspot.com",
    messagingSenderId: "734223971641",
    appId: "1:734223971641:web:4f497d8d4abcbad7a2a4e8",
    measurementId: "G-CYB8CJTMVM"
};

var fire = firebase.initializeApp(config);
export default fire;
