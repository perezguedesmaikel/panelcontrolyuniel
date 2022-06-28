import React, {useEffect, useState} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Items from "./components/items";
import Registrar from "./components/Registrar";
import Login from "./components/login";
import {app} from './firebase/nuevacredensial';
function App() {
    const[usuario,setUsuario]=useState(null);
    useEffect(()=>{
        app.auth().onAuthStateChanged(usuarioFirebase=>{
            setUsuario(usuarioFirebase);
        })
    },[]);
  return (
    <div className="App">
        <Routes>
            {usuario?<Route path='/registrar' element={<Registrar setUsuario={setUsuario}/>}/>: <Route path='/registrar' element={<Login setUsuario={setUsuario}/>}/>}
            {usuario?<Route path='/' element={<Items/>}/>: <Route path='/' element={<Login setUsuario={setUsuario}/>}/>}
        </Routes>

    </div>
  );
}

export default App;
