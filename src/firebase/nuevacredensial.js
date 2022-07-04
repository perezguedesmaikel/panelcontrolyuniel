

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



export const app=firebase.initializeApp({
    "projectId": "mabriss-web",
    "appId": "1:637081266217:web:aa9b05e15989702823d438",
    "storageBucket": "mabriss-web.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBSmnK3QK6sJvZWZKa32j89C0jjiofD_mU",
    "authDomain": "mabriss-web.firebaseapp.com",
    "messagingSenderId": "637081266217"
});
