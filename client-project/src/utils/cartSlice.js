import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addOrder:(state,action) =>{            
            state.items.push(action.payload)
        },
         removeOrder:(state,action) =>{
          const filteredItems = state.items.filter((item)=>item.productId !== action.payload
        ); 
            
            state.items = filteredItems;
        } 
    }
});

export const{addOrder,removeOrder} = cartSlice.actions;

export default cartSlice.reducer;
