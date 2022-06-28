import {useAuth} from '../context/authContext';
import {Navigate} from 'react-router-dom';
import React from "react";


export function ProtectedRoute({children}) {

    const {user}=useAuth();

        if (!user) return <Navigate to={'/login'}/>

    return <>{children}</>
}