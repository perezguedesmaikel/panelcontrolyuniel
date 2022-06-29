
import * as React from 'react';
import TextField from '@mui/material/TextField';
import UploadButtons from "./upload";
import TextareaAutosize from '@mui/material/TextareaAutosize';


function AgregarItem() {
    return(

        <div className='m-1'><h2 className='m-1'>Agregar Item</h2>
            <form>
                <div className="m-2">
                    <TextField
                        label="Nombre del producto"
                        fullWidth={true}
                    />
                  <UploadButtons/>
                    <TextField
                        className='mb-1'
                        label="Valor en CUP"
                        fullWidth={true}
                    />
                <TextField
                    className='mb-1'
                    label="Descripción del producto"
                    fullWidth={true}
                />
                <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </form>
        </div>



    )

}
export default AgregarItem;