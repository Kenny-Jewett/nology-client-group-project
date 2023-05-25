import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name:'inventory',
    initialState:{
        items:[]
    },
    reducers:{
        loadItems:(state,action) =>{
            return {
                ...state,
                items:action.payload
            }
        }
    }
});


export const{loadItems} = inventorySlice.actions;


export default inventorySlice.reducer;
