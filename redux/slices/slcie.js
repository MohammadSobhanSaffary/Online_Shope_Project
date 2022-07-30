import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'loginValidation',
    initialState:{
        isLoginValid:false,    
    },
    reducers:{
        setValidation:(state,action)=>{
            state.isValid=action.payload;
        }
    }
})
export  const {setValidation};
export default slice.reducer;