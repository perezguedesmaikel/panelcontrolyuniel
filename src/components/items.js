import React from "react";
import RecipeReviewCard from "./card";
import NavBar from "./navBar";
import {useAuth} from '../context/authContext';
import CircularProgress from "@mui/material/CircularProgress";

function Items() {
    const {user,loading}=useAuth();


    return(

        <>

            <div className='mb-4'>
            <NavBar/>
            </div>
        <div className='container-fluid'>
            <h1>Vienvenido</h1>
            {loading &&<CircularProgress />}
            <h4>{user.email}</h4>
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