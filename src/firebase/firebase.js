// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPEEmNFproaIqL-sDNQIjhOQNOMgmCqE8",
    authDomain: "mabrissconfig.firebaseapp.com",
    projectId: "mabrissconfig",
    storageBucket: "mabrissconfig.appspot.com",
    messagingSenderId: "728649697506",
    appId: "1:728649697506:web:2adab6e721ebfb199fb6bb",
    measurementId: "G-8SMQD3YF9P"

};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const analytics = getAnalytics(app);

