import {useAuth} from '../context/authContext';
import {Navigate} from 'react-router-dom';
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export function ProtectedRoute({children}) {
    const {user,loading}=useAuth();
    if (loading) return <CircularProgress/>;
    if (!user) return <Navigate to={'/login'}/>;
    return <>{children}</>
}