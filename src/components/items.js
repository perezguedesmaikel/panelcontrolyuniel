import React from "react";
import RecipeReviewCard from "./card";
import NavBar from "./navBar";

//conmot
function Items() {
    return(
        <>
            <div className='mb-4'>
            </div>
        <div className='container-fluid'>
            <h1>Vienvenido</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
            </div>
        </div>
        </>
    )

}
export default Items;