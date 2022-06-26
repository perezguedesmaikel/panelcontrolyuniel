import React,{useState} from 'react';
import './App.css';
import SignIn from "./components/login";
import Items from "./components/items";
function App() {
    const [loguiado,setLoguiado]=useState(false);
    function hanlindLoguiado() {
        setLoguiado(true);
    }
  return (
    <div className="App">
        {loguiado?<Items/>:<SignIn hanlindLoguiado={hanlindLoguiado}/>}

    </div>
  );
}

export default App;
