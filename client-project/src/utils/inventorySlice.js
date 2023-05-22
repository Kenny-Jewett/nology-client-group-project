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
        },
        removeItem:(state,action) =>{
            state.items.pop();
        }
    }
});

export const{loadItems,removeItem} = inventorySlice.actions;

export default inventorySlice.reducer;
