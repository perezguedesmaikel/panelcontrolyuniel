import React, {createContext, useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "@firebase/auth";
import {auth} from '../firebase/firebase';

export const authContext=createContext({});

 export const useAuth=()=>{
     return useContext(authContext);

 }
export function AuthProvider({children}) {
     const[user,setUser]=useState({});
     const [loading,setLoading]=useState(true);

const signup=(correo,contrasena)=>createUserWithEmailAndPassword(auth,correo,contrasena);
const login= async (correo, contrasena) => signInWithEmailAndPassword(auth, correo, contrasena);
const logout=()=>signOut(auth);



useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser);
        setLoading(false);
    });
    return unsubscribe();

},[]);
    return(
        <authContext.Provider value={{signup,login,user,logout,loading}}>
            {children}
        </authContext.Provider>
    )
}
//Ejemplo para user context, la linea de abajo es un ejemplo de lo unico que se deve importar
//import {useAuth} from '../context/authContext';