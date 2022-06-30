import React from "react";
import RecipeReviewCard from "./card";
import NavBar from "./navBar";

//ecomerce
function Items(props) {

    return(
        <>
            <div className='mb-4'>
            </div>
        <div className='container-fluid'>
            <h1>Vienvenido</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                {props.items.map((item,index)=><div key={index}><RecipeReviewCard name={item.nombre} descripcion={item.descripcion}
                presio={item.presio} imagen={item.imagen}
                /></div>)}


            </div>
        </div>
        </>
    )

}
export default Items;