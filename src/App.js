import React, {useEffect, useState} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Items from "./components/items";
import Registrar from "./components/Registrar";
import Login from "./components/login";
import {app} from './firebase/nuevacredensial';
import NavBar from "./components/navBar";
import Alert from "@mui/material/Alert";
import AgregarItem from "./components/agregarItem";
function App() {
//para hacer commit
    const[usuario,setUsuario]=useState(null);
    useEffect(()=>{
        app.auth().onAuthStateChanged(usuarioFirebase=>{
            setUsuario(usuarioFirebase);
        })
    },);

  return (
    <div className="App">
        {usuario &&<NavBar/>}
        <Routes>
            {usuario?<Route path='/registrar' element={<Registrar setUsuario={setUsuario}/>}/>: <Route path='/registrar' element={<Login setUsuario={setUsuario}/>}/>}
            {usuario?<Route path='/agregar' element={<AgregarItem/>}/>: <Route path='/agregar' element={<Login setUsuario={setUsuario}/>}/>}
            {usuario?<Route path='/' element={<Items />}/>: <Route path='/' element={<Login setUsuario={setUsuario}/>}/>}
            <Route path='/*' element={<Alert variant="filled" severity="error">
                Esa ruta no existe!!!
            </Alert>}/>
        </Routes>

    </div>
  );
}

export default App;
