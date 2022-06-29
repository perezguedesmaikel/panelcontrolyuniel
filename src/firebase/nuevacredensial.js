

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


export const app=firebase.initializeApp({
    "projectId": "mabrissconfig",
    "appId": "1:728649697506:web:955fd2cdf8339ca29fb6bb",
    "storageBucket": "mabrissconfig.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyCPEEmNFproaIqL-sDNQIjhOQNOMgmCqE8",
    "authDomain": "mabrissconfig.firebaseapp.com",
    "messagingSenderId": "728649697506",
    "measurementId": "G-44ZTQ61DHC"
});
