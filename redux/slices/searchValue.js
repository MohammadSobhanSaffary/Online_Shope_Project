import { createSlice } from "@reduxjs/toolkit";


const slice=createSlice({
    name:'search',
    initialState:{
        value:'' ,    
    },
    reducers:{
        setSearchValue:(state,action)=>{
            state.value=action.payload;
        }
    }
})
export const {setSearchValue}=slice.actions;
export default slice.reducer;