import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Items from "./components/items";
import Registrar from "./components/Registrar";
import {AuthProvider, useAuth} from './context/authContext';
import Login from "./components/login";
import {ProtectedRoute} from "./components/protectedroute";

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registrar' element={<ProtectedRoute><Registrar/></ProtectedRoute>}/>
            <Route path='/' element={<ProtectedRoute><Items/></ProtectedRoute>}/>
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
