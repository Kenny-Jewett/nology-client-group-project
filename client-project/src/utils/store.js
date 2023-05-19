import {configureStore} from '@reduxjs/toolkit';
import inventorySlice from './inventorySlice';
import cartSlice from './cartSlice';
const store = configureStore({
   reducer:{
    inventory:inventorySlice,
    cart:cartSlice
   }
});
export default store;

