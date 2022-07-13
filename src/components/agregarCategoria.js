import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import {supabase} from "../firebase/supabase";
import {useNavigate} from 'react-router-dom';

function AgregarCategoria() {
    const navigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error2,setError2]=useState(null);
    const onSubmit = async data => {
        const {categoria} = data;
        try{
            const { data, error } = await supabase
                .from('categoria')
                .insert([
                    { nombre: categoria}
                ]);
            error && setError2(error);
            navigate('/agregar');

        }catch (e) {
            console.log(e.message);
        }


    };

    return(
        <div className='container'>
        <h1 className='mt-2'>Agregar Categoria</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register("categoria", { required: true })}
                className='mt-2'
                id="outlined-helperText"
                label="Agregue una categoria"
                fullWidth={true}
            />
                {errors.categoria && <Alert variant="filled" severity="error">
                    El campo no se puede enviar en blanco al server!!!
                </Alert>}
                {error2&&<Alert variant="filled" severity="error">
                    {error2}
                </Alert>}<br/>
            <Button variant="contained" className='mt-2' type='submit'>Agregar</Button>
            </form>
        </div>

    )

}
export default AgregarCategoria;