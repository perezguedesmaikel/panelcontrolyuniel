import React, {createContext, useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "@firebase/auth";
import {auth} from '../firebase/firebase';

export const authContext=createContext({});

 export const useAuth=()=>{
     return useContext(authContext);

 }
export function AuthProvider({children}) {
     const[user,setUser]=useState({});

const signup=(correo,contrasena)=>createUserWithEmailAndPassword(auth,correo,contrasena);
const login= async (correo, contrasena) => signInWithEmailAndPassword(auth, correo, contrasena);



useEffect(()=>{
    onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser);
    })

},[]);
    return(
        <authContext.Provider value={{signup,login,user}}>
            {children}
        </authContext.Provider>
    )
}
//Ejemplo para user context, la linea de abajo es un ejemplo de lo unico que se deve importar
//import {useAuth} from '../context/authContext';