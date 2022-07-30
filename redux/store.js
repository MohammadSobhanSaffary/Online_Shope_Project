import { configureStore } from "@reduxjs/toolkit";
import loginValidiation from '/slices/slice';
export const store=configureStore({
    reducer:{
        loginValidiation:isLoginValied,
    }
})