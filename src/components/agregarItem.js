import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import {app} from '../firebase/nuevacredensial';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Alert from "@mui/material/Alert";
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from "react-router-dom";
import {supabase} from '../firebase/supabase';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BasicSelect from "./selectbasico";
import CanvasDelSelect from "./canvas_del_select";
const Input = styled('input')({
    display: 'none',
});
const inicialState={
    nombre:'',
    descripcion:'',
    url:'',
    valor:0
}

let archivo;
let archivoPath;
function AgregarItem(props) {
    const navigate=useNavigate();
    const [submite,setsubmite]=useState(false);
    const [archivoload,setArchivoload]=useState(null);
    let archivourl;
    const archivoHandler= async (e) => {
        archivo = e.target.files[0];
        setArchivoload(archivo.name);
    }
    const handlerSubmit= async (e) => {
        e.preventDefault();
        setsubmite(true);
        //subir imagen
        try{
            const { data, error } = await supabase
                .storage
                .from('mabriss')
                .upload(archivoload.toString(), archivo, {
                    cacheControl: '3600',
                    upsert: false
                });
            const { publicURL, error2 } = supabase
                .storage
                .from('mabriss')
                .getPublicUrl(archivoload.toString());

            error2?console.log(error2.message):archivourl=publicURL;
            error&&console.log(error.message);
            //sigo probando

        }catch (e) {
            console.log(e.message+'tipo imagen');

        }

        //prueba subir imagen
        const {nombre} = e.target;
        const {value: nombreArchivo} = nombre;
        const {valor} = e.target;
        const {value: valorArchivo} = valor;
        const {descripcion} = e.target;
        const {value: descripcionArchivo} = descripcion;
        const {categoria} = e.target;
        const {value: categorianArchivo} = categoria;
        //trabajo con firebase
        //nuevo
        const { data, error } = await supabase
            .from('tienda')
            .insert([
                { nombre: nombreArchivo, descripcion: descripcionArchivo,archivoname:archivoload,presio:valorArchivo,
                imagen:archivourl,categoria:categorianArchivo
                }
            ])
        //nuevo
        setsubmite(true);
        setTimeout(function(){
            setsubmite(false);
        }, 500);
        navigate('/');
    }

    return(

        <div className='m-1'><h2 className='m-1'>Agregar Item</h2>
            <form onSubmit={handlerSubmit}>
                <div className="m-2">
                    <BasicSelect dataSelect={props.dataselect} name={'categoria'}/>
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
                    <Alert variant="filled" severity="success" className={`mb-2  ${archivoload?'':'imagen'}`} >
                        {archivoload && archivoload+' está listo para ser enviado'}
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
                    <Alert variant="filled" severity="success" className={`mb-2  ${submite?'':'imagen'}`} >
                        Espere unos segundos por favor!
                    </Alert>
                <button type="submit" className={`btn btn-primary mt-1 ${submite?'imagen':''}`}>Agregar</button>
                </div>

            </form>

        </div>



    )

}
export default AgregarItem;