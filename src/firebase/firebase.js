// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAG26ArI_3QGvVmoZdwLYQsJvIPp0Pv4A",
    authDomain: "panelconf.firebaseapp.com",
    projectId: "panelconf",
    storageBucket: "panelconf.appspot.com",
    messagingSenderId: "595022044046",
    appId: "1:595022044046:web:e03d04d07dada666fd22df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);