import React from "react";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import {app} from '../firebase/nuevacredensial';
import { AiFillSetting } from "react-icons/ai";
import {supabase} from "../firebase/supabase";

function NavBar() {
    const navigate=useNavigate();
     const  handerlogaout=  async () => {
         const { error } = await supabase.auth.signOut();
     }
     const items=()=>{
         navigate('/');
     }
    const agregarAdmin=()=>{
        navigate('/registrar');
    }
    const agregaritem=()=>{
         navigate('/agregar');
    }
    const agregarCategoria=()=>{
         navigate('/categoria');
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#"><AiFillSetting/> Administración:</a>
                <button className="navbar-toggler m-1" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="d-flex  navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Button variant="contained" color='primary' fullWidth={true} onClick={items}>Mostrar Tienda</Button>
                        </li>
                        <li className="nav-item">
                              <Button variant="contained" color='primary' fullWidth={true} onClick={agregaritem}>Agregar Item</Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="contained" color='primary' fullWidth={true} onClick={agregarCategoria}>Agregar Categoria</Button>
                        </li>
                        <li className="nav-item">
                                <Button variant="contained" color='primary' fullWidth={true} onClick={agregarAdmin}>Agregar Admin</Button></li>
                    </ul>
                    <form className="d-flex  m-2">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <Button color="primary" variant="contained">Buscar</Button>
                    </form>
                    <Button color="warning" variant="contained" onClick={handerlogaout}><LogoutIcon className='text-light m-1'/>salir</Button>
                </div>
            </div>
        </nav>
    )

}
export default NavBar;