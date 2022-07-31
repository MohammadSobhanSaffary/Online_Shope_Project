import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'loginValidation',
    initialState:{
        isLoginValid:false,    
    },
    reducers:{
        setValidation:(state,action)=>{
            state.isLoginValid=action.payload;
        }
    }
})
export const {setValidation}=slice.actions;
export default slice.reducer;