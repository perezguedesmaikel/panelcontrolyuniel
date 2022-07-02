import React, {useEffect, useState} from "react";
import RecipeReviewCard from "./card";
import {app} from "../firebase/nuevacredensial"
import ModalBorrar from "./modalBorrar";
import Card from "@mui/material/Card";


//ecomerce
function Items() {
    const [docus,setdocus]=useState([]);
    const[idborrar,setIdBorrar]=useState(null);
    function obteniendoid(valor){
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
            <h1>Vienvenido</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    docus.map(item=><RecipeReviewCard nombre={item.nombre} descripcion={item.descripcion} url={item.imagen}
                                                      obteniendoid={()=>obteniendoid(item.id)}/>)
                }





            </div>
        </div>
            <ModalBorrar idborrar={idborrar}/>
        </>
    )

}
export default Items;