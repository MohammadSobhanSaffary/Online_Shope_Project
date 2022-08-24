import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'purchases',
    initialState: {
        value: [],
    },
    reducers: {
        setpurchases: (state, action) => {
            state.value = action.payload;
        },

        addNumber: (state, action) => {
            const product = state.value.find(el => el.id === action.payload);
            (product) ? state.value.map(el => {
                el.id === product.id ? { ...product, number: +product.number++ } : el
            }) : ''
        },
        reduceNumber: (state, action) => {
            const product = state.value.find(el => el.id === action.payload);
            (product.number > 1) ? state.value.map(el => {
                el.id === product.id ? { ...product, number: +product.number-- } : el
            }) : state.value = state.value.filter(el => el.id !== product.id)
        }

        , removeItem: (state, action) => {
            const product = state.value.find(el => el.id === action.payload);
            state.value = state.value.filter(el => el.id !== product.id)
        }

    }
})
export const { setpurchases, addNumber, reduceNumber,removeItem } = slice.actions;
export default slice.reducer;