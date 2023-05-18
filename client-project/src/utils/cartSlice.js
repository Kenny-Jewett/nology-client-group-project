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
        }]
    },
    reducers:{
        addItem:(state,action) =>{
            state.items.push(action.payload)
        },
        removeItem:(state,action) =>{
         const currentItems =  state.items.filter((item)=>{
             return item.id != action.payload.id
    } 
        );
        }
    }
});

export const{addItem,removeItem} = cartSlice.actions;

export default cartSlice.reducer;
