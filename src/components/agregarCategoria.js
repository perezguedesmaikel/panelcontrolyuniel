import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AgregarCategoria() {
    return(
        <div className='container'>
        <h1 className='mt-2'>Agregar Categoria</h1>
            <form>
            <TextField
                className='mt-2'
                id="outlined-helperText"
                label="Agregue una categoria"
                fullWidth={true}
            />
            <Button variant="contained" className='mt-2'>Agregar</Button>
            </form>
        </div>

    )

}
export default AgregarCategoria;