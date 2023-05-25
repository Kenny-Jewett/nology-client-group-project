import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        subTotal:0,
        loading:true
    },
    reducers:{
        loadCartItems:(state,action) =>{
          return{
            ...state,
            items:action.payload,
            loading:false
          }
        },
        addOrder:(state,action) =>{
            state.items.push(action.payload)
        },
         removeOrder:(state,action) =>{
          const filteredItems = state.items.filter((item)=>item.productId !== action.payload
        ); 
            
            state.items = filteredItems;
        } ,
        updateSubTotal:(state,action) =>{
            
            return{
                ...state,
                subTotal:action.payload.toFixed(2),
            }
        },

       updateCart:(state,action)=>{
        console.log(action.payload);
        //const findObject = state.items((item)=>)
        return{
            ...state,
                items: state.items.map((item)=>
                      item.id===action.payload.id ? item.cartQuantity = action.payload.temp : null)
            
        }
       }
      
    }
});

export const{addOrder,removeOrder,updateSubTotal,loadCartItems,updateCart} = cartSlice.actions;

export default cartSlice.reducer;
