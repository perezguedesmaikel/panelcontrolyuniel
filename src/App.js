import React,{useState} from 'react';
import './App.css';
import SignIn from "./components/login";
import {Routes,Route} from 'react-router-dom';
import Items from "./components/items";
import Registrar from "./components/Registrar";
function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/registrar' element={<Registrar/>}/>
            <Route path='/items' element={<Items/>}/>

        </Routes>

    </div>
  );
}

export default App;
