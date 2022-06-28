import { configureStore } from '@reduxjs/toolkit';
import ParcheSlice from "./parcheSlice";


export const store = configureStore({
  reducer: {
    parche:ParcheSlice

  },
});
