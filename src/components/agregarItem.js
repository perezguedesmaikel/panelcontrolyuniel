import * as React from 'react';
import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {app} from '../firebase/nuevacredensial';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from 'uuid';

const Input = styled('input')({
    display: 'none',
});
const inicialState={
    nombre:'',
    descripcion:'',
    url:'',
    valor:0
}


function AgregarItem(props) {
    let id=uuidv4();
    const [archivourl,setArchivourl]=useState('');
    const [imagencargada,setImagencargada]=useState(false);
    const [submite,setsubmite]=useState(false);
    const archivoHandler= async (e) => {
        const archivo = e.target.files[0];
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(archivo.name);
        await archivoPath.put(archivo);
        const enlaceUrl=await archivoPath.getDownloadURL();
        setArchivourl(enlaceUrl);
        setImagencargada(true);
    }
    const handlerSubmit= async (e) => {
        setImagencargada(false);
        e.preventDefault();
        const {nombre} = e.target;
        const {value: nombreArchivo} = nombre;
        const {valor} = e.target;
        const {value: valorArchivo} = valor;
        const {descripcion} = e.target;
        const {value: descripcionArchivo} = descripcion;
        //trabajo con firebase
        const coleccionref = app.firestore().collection('tienda');
        const docu = await coleccionref.doc(id).set({
            nombre: nombreArchivo,
            presio: valorArchivo,
            imagen: archivourl,
            descripcion: descripcionArchivo
        });
        setsubmite(true);
        setTimeout(function(){
            setsubmite(false);
        }, 2000);
    }

    return(

        <div className='m-1'><h2 className='m-1'>Agregar Item</h2>
            <form onSubmit={handlerSubmit}>
                <div className="m-2">
                    <TextField
                        label="Nombre del producto"
                        name='nombre'
                        fullWidth={true}
                    />
                    <Stack direction="row" alignItems="center" spacing={2} className='d-flex justify-content-center border mt-1 mb-2'
                           onChange={archivoHandler}>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file"/>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                Cargar <PhotoCamera /> Imagen
                            </IconButton>
                        </label>
                    </Stack>
                    <Alert variant="filled" severity="success" className={`mb-2  ${imagencargada?'':'imagen'}`} >
                        La imagen se cargo con exito!
                    </Alert>
                    <TextField
                        name='valor'
                        className='mb-1'
                        label="Valor en CUP"
                        fullWidth={true}
                    />
                <TextField
                    name={'descripcion'}
                    className='mb-1 mt-1'
                    label="Descripción del producto"
                    fullWidth={true}
                />
                <button type="submit" className="btn btn-primary mt-1">Agregar</button>
                </div>
                <Alert variant="filled" severity="success" className={`mb-2  ${submite?'':'imagen'}`} >
                    Datos enviados al server con exito!
                </Alert>
            </form>

        </div>



    )

}
export default AgregarItem;