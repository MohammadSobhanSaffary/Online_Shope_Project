import { configureStore } from "@reduxjs/toolkit";
import adminloginValidation from './slices/adminValidation';
import user from './slices/userLogin';
import purchases from './slices/shopSlice';


export const store = configureStore({
    reducer: {
        isLoginValied: adminloginValidation,
         userInfo :user ,
         cart:purchases
    }
})