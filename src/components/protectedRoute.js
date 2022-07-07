import {useAuth} from '../context/authcontext';
import {Navigate} from 'react-router-dom';
import React from "react";
export function ProtectedRoute({children}) {
    const{session}=useAuth();
    if(!session) return <Navigate to={'/login'}/>;
    return <>{children}</>
}