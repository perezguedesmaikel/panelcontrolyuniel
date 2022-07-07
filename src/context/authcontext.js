import React, {createContext, useContext, useEffect, useState} from 'react';
import {supabase} from "../firebase/supabase";
import {useNavigate} from 'react-router-dom';

export const authContext=createContext({});

 export const useAuth=()=>{
     return useContext(authContext);

 }

export function AuthProvider({children}) {
    const [user,setUser]=useState(null);

    const signup= async (email, password) => {

        try{
            const {user, session, error} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            error&&console.log(error);
            console.log('ha creado su cuenta satisfactoriamente');
        }catch (e) {
            console.log(e.message());
        }

    }
    useEffect(()=>{
       supabase.auth.onAuthStateChange((event, session) => {
            setUser(user);
        })
    },[]);
    return(
        <authContext.Provider value={{signup,user}}>
            {children}
        </authContext.Provider>
    )
}
//Ejemplo para user context, la linea de abajo es un ejemplo de lo unico que se deve importar
//import {useAuth} from '../context/authContext';