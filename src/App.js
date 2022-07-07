import React, {useEffect, useState} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Items from "./components/items";
import Login from "./components/login";
import {app} from './firebase/nuevacredensial';
import NavBar from "./components/navBar";
import Alert from "@mui/material/Alert";
import AgregarItem from "./components/agregarItem";
import Log from "./components/log";
import {ProtectedRoute} from "./components/protectedRoute";
import {useAuth} from './context/authcontext'
import {supabase} from "./firebase/supabase";
function App() {
//para hacer commit
    const {user}=useAuth();
    console.log(user);


  return (
    <div className="App">
        {user &&<NavBar/>}
        <Routes>
            <Route path='/registrar' element={<ProtectedRoute>Registrar/></ProtectedRoute>}/>
            <Route path='/log' element={<ProtectedRoute><Log/></ProtectedRoute>}/>
            <Route path='/agregar' element={<ProtectedRoute><AgregarItem/></ProtectedRoute>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<ProtectedRoute><Items /></ProtectedRoute>}/>
            <Route path='/*' element={<Alert variant="filled" severity="error">
                Esa ruta no existe!!!
            </Alert>}/>
        </Routes>

    </div>
  );
}

export default App;
