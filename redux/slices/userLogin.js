import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";

const slice=createSlice({
    name:'user',
    initialState:{
        value: (getCookie('user')==null)?'':getCookie('user')  ,    
    },
    reducers:{
        setUser:(state,action)=>{
            state.value=action.payload;
        }
    }
})
export const {setUser}=slice.actions;
export default slice.reducer;