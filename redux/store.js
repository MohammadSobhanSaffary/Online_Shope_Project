import { configureStore } from "@reduxjs/toolkit";

import loginValidation from './slices/adminValidation';
import categoriesProduct from './slices/categoriesRender';
export const store=configureStore({
    reducer:{
        isLoginValied:    loginValidation,
        categoriesProductState : categoriesProduct,
    }
})