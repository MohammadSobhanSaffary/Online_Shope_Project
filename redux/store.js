import { configureStore } from "@reduxjs/toolkit";
import loginValidation from './slices/slcie';
export const store=configureStore({
    reducer:{
        isLoginValied:    loginValidation,
    }
})