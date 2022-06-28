import React from "react";
import Button from "@mui/material/Button";
import {Link, useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuth} from "../context/authContext";
function NavBar() {
    const {logout,loading}=useAuth();
    const navigate=useNavigate();
     const  handerlogaout= async () => {
         await logout();
         navigate('/login');
     }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Administración:</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/items'} className="nav-link active text-light" aria-current="page" href="#">
                              <Button variant="contained" color='primary'>Agregar Item</Button></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/registrar'} className="nav-link active text-light" aria-current="page" href="#">
                                <Button variant="contained" color='primary'>Agregar Admin</Button></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Aseo</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Ropa
                            </a>
                            <ul className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item " href="#">Blusa</a></li>
                                <li><a className="dropdown-item " href="#">Licra</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item " href="#">Cartera</a></li>
                            </ul>
                        </li>
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