import React from "react";
import RecipeReviewCard from "./card";
import NavBar from "./navBar";
import {useAuth} from '../context/authContext';

function Items() {
    const {user}=useAuth();

    return(
        <>
            <div className='mb-4'>
            <NavBar/>
            </div>
        <div className='container-fluid'>
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