import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'purchases',
    initialState: {
        value: [],
    },
    reducers: {
        setpurchases: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const { setpurchases } = slice.actions;
export default slice.reducer;