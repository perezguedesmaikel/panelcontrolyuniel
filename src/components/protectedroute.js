import {useAuth} from '../context/authContext';
import {Navigate} from 'react-router-dom';
import React, {useEffect} from "react";


export function ProtectedRoute({children}) {
    useEffect(()=>{
        navegar();
        return () => {
            if (!user) return <Navigate to={'/'}/>
        }
    },[]);
    const {user}=useAuth();
    const navegar=()=>{
        if (!user) return <Navigate to={'/'}/>
    }
    return <>{children}</>
}