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
        updateLoadingStatus:(state,action)=>{
            return{
              ...state,
              loading:false
            }
          },


          addOrder:(state,action) =>{
            console.log("action.payload from addOrder",action.payload);
            return{
                ...state,
                items:[...state.items,action.payload]
                
            }
            
        },
         removeOrder:(state,action) =>{
          const filteredItems = state.items.filter((item)=>item.productId !== action.payload
        ); 
            
            state.items = filteredItems;
        } ,
        updateSubTotal:(state,action) =>{
            
            return{
                ...state,
                subTotal:action.payload
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

export const{addOrder,removeOrder,updateSubTotal,loadCartItems,updateCart,updateLoadingStatus} = cartSlice.actions;

export default cartSlice.reducer;
