import { configureStore } from "@reduxjs/toolkit";
import isLoginValied from './slices/adminValidation';
import userInfo from './slices/userLogin';
import cart from './slices/shopSlice';
import search from "./slices/searchValue";


export const store = configureStore({
    reducer: {
        isLoginValied,
         userInfo  ,
         cart,
         search
    }
})