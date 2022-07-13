import React, {useEffect, useState} from "react";
import RecipeReviewCard from "./card";
import ModalBorrar from "./modalBorrar";
import {useNavigate} from "react-router-dom";
import {supabase} from "../firebase/supabase";
import InteractiveCard from "./cardThumnail";


//ecomerce

function Items() {
    const navigate=useNavigate();
    const [docus,setdocus]=useState([]);
    const[idborrar,setIdBorrar]=useState(null);
    const[archivoName,setArchivoName]=useState('');
    function obteniendoid(valor,valor2){
        setArchivoName(valor2);
        setIdBorrar(valor);

    }
    useEffect(()=>{
     async function consultar() {
         const { data, error } = await supabase.from('tienda').select();
         error&&console.log(error.message);
         setdocus(data);
        }

        consultar().then();

    },[]);


    return(
        <>
            <div className='mb-4'>
            </div>
        <div className='container-fluid'>
            <h1>Bienvenido</h1>
            <div className='d-flex flex-wrap justify-content-center'>

                {
                    docus.map(item=><div key={item.id}><InteractiveCard/></div>)
                }





            </div>
        </div>
            <ModalBorrar idborrar={idborrar} archivoName={archivoName} />
        </>
    )

}
export default Items;