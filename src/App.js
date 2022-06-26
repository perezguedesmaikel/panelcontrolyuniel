import React,{useState} from 'react';
import './App.css';
import SignIn from "./components/login";
import Dashboard from "./components/Dashboard";



function App() {
    const [loguiado,setLoguiado]=useState(false);
    function hanlindLoguiado() {
        setLoguiado(true);

    }
  return (
    <div className="App">

        {loguiado?<Dashboard/>:<SignIn hanlindLoguiado={hanlindLoguiado}/>}
    </div>
  );
}

export default App;
