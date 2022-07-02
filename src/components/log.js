import React from "react";
import {useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

function Log() {
    const navigate=useNavigate();
    function regresar() {
        navigate("/");
    }
    return(
        <div>

            <Alert variant="filled" severity="success">
                El item fue eliminado de la base de datos, así como la imagen fue eliminada del storage!
            </Alert>
            <Button variant="contained" onClick={regresar} className="m-1">Regresar</Button>
        </div>
    )

}
export default Log;