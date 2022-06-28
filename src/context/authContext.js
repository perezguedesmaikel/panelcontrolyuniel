import React, {createContext, useContext} from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from '../firebase/firebase';

export const authContext=createContext({});

 export const useAuth=()=>{
     return useContext(authContext);

 }
export function AuthProvider({children}) {

const signup=(correo,contrasena)=>createUserWithEmailAndPassword(auth,correo,contrasena);
const login=(correo,contrasena)=>signInWithEmailAndPassword(auth,correo,contrasena);



    return(
        <authContext.Provider value={{signup,login}}>
            {children}
        </authContext.Provider>
    )
}
//Ejemplo para user context, la linea de abajo es un ejemplo de lo unico que se deve importar
//import {useAuth} from '../context/authContext';