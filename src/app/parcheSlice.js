import {createSlice } from '@reduxjs/toolkit';


export const ParcheSlice = createSlice({
    name: 'parche',
    initialState:{
        loguiado:{}
    },

    reducers: {
        setLoguiado:(state,action)=>{
            state.loguiado=action.payload;
        }

    },

});
export default ParcheSlice.reducer;
export const { setLoguiado}=ParcheSlice.actions;
//función que modifican el estado
export const camabiarestadolog=(val)=>(dispatch)=>{
    dispatch(setLoguiado(val));
}