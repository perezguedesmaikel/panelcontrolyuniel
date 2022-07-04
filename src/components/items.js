import React, {useEffect, useState} from "react";
import RecipeReviewCard from "./card";
import {app} from "../firebase/nuevacredensial"
import ModalBorrar from "./modalBorrar";
import {useNavigate} from "react-router-dom";


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
            const docusList = await app.firestore().collection("tienda").get();
            setdocus(docusList.docs.map(doc => doc.data()));
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
                    docus.map(item=><RecipeReviewCard nombre={item.nombre} descripcion={item.descripcion} url={item.imagen}
                                                      obteniendoid={()=>obteniendoid(item.id,item.archivoName)}/>)
                }





            </div>
        </div>
            <ModalBorrar idborrar={idborrar} archivoName={archivoName} />
        </>
    )

}
export default Items;