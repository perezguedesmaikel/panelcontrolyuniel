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

    const[usuario,setUsuario]=useState(null);
    const[items,setItems]=useState([]);
    useEffect(()=>{
        app.auth().onAuthStateChanged(usuarioFirebase=>{
            setUsuario(usuarioFirebase);
        })
    },);
    useEffect( ()=>{
        const  obtenerData=async()=> {
            const docusList=await app.firestore().collection('tienda').get();
            setItems(docusList.docs.map(doc=>doc.data()));
        }
        obtenerData().then();


    },[]);
  return (
    <div className="App">
        {usuario &&<NavBar/>}
        <Routes>
            {usuario?<Route path='/registrar' element={<Registrar setUsuario={setUsuario}/>}/>: <Route path='/registrar' element={<Login setUsuario={setUsuario}/>}/>}
            {usuario?<Route path='/agregar' element={<AgregarItem setItems={setItems}/>}/>: <Route path='/agregar' element={<Login setUsuario={setUsuario}/>}/>}
            {usuario?<Route path='/' element={<Items items={items}/>}/>: <Route path='/' element={<Login setUsuario={setUsuario}/>}/>}
            <Route path='/*' element={<Alert variant="filled" severity="error">
                Esa ruta no existe!!!
            </Alert>}/>
        </Routes>

    </div>
  );
}

export default App;
