import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[{
            productId: 100,
            company:'Lenovo',
            productName:'ThinkPad X1 Yoga Gen6',
            price:'1782.97',
            imgUrl:'https://images.pexels.com/photos/18105/pexels-photo.jpg',
            productType:'laptop',
            itemQuantity:1
            
        },
        {
            productId: 101,
            company:'Samsung',
            productName:'Samsung - Galaxy Book3 360',
            price:'1349.99',
            imgUrl:'https://images.pexels.com/photos/7974/pexels-photo.jpg',
            productType:'laptop',
            itemQuantity:2
        },
        {
            productId: 103,
            company:'Dell',
            productName:'Dell - Inspiron 14.0" 2-in-1 Touch',
            price:'949.99',
            imgUrl:'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
            productType:'laptop',
            itemQuantity:1
        }],
        subTotal:0
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
       /*  removeOrder:(state,action) =>{
            return{
                
                items:[...state.items.filter(item => item.productId != action.payload.productId)]
            }
        } */
    }
});

export const{addOrder,removeOrder} = cartSlice.actions;

export default cartSlice.reducer;
