import * as React from 'react';
import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {app} from '../firebase/nuevacredensial';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
    display: 'none',
});


function AgregarItem() {
    const [archivourl,setArchivourl]=useState('');
    const archivoHandler= async (e) => {
        const archivo = e.target.files[0];
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(archivo.name);
        await archivoPath.put(archivo);
        const enlaceUrl=await archivoPath.getDownloadURL();
        setArchivourl(enlaceUrl);
    }
    const handlerSubmit= async (e) => {
        e.preventDefault();
        const {nombre} = e.target;
        const {value: nombreArchivo} = nombre;
        const {valor} = e.target;
        const {value: valorArchivo} = valor;
        const {descripcion} = e.target;
        const {value: descripcionArchivo} = descripcion;
        //trabajo con firebase
        const coleccionref = app.firestore().collection('tienda');
        const docu = await coleccionref.doc(nombreArchivo).set({
            nombre: nombreArchivo,
            presio: valorArchivo,
            imagen: archivourl,
            descripcion: descripcionArchivo
        })
    }
    useEffect(()=>{
        const docusList=app.firestore().collection('tienda').get();
    },[])
    return(

        <div className='m-1'><h2 className='m-1'>Agregar Item</h2>
            <form onSubmit={handlerSubmit}>
                <div className="m-2">
                    <TextField
                        label="Nombre del producto"
                        name='nombre'
                        fullWidth={true}
                    />
                    <Stack direction="row" alignItems="center" spacing={2} className='d-flex justify-content-center'
                           onChange={archivoHandler}>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file"/>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                Cargar <PhotoCamera /> Imagen
                            </IconButton>
                        </label>
                    </Stack>
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
                <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </form>
        </div>



    )

}
export default AgregarItem;