import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Items from "./components/items";
import Registrar from "./components/Registrar";
import {AuthProvider} from './context/authContext';
import Login from "./components/login";
function App() {

  return (
    <div className="App">
        <AuthProvider>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/registrar' element={<Registrar/>}/>
            <Route path='/items' element={<Items/>}/>firebase
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
