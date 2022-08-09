import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'user',
    initialState:{
        value:'',    
    },
    reducers:{
        setUser:(state,action)=>{
            state.value=action.payload;
        }
    }
})
export const {setUser}=slice.actions;
export default slice.reducer;