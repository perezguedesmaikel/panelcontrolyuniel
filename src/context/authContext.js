import React, {createContext, useContext} from 'react';

export const authContext=createContext({});

 export const useAuth=()=>{
     return useContext(authContext);

 }
export function AuthProvider({children}) {
    const user={
        login:true
    }
    return(
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    )
}
//Ejemplo para user context, la linea de abajo es un ejemplo de lo unico que se deve importar
//import {useAuth} from '../context/authContext';