import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    items: [],
    laptops: [],
    headphones: [],
    smartwatches: [],
    speakers: [],
  },
  reducers: {
    loadItems: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },
    loadLaptops: (state, action) => {
      return {
        ...state,
        laptops: action.payload,
      };
    },
  },
});

export const { loadItems, loadLaptops } = inventorySlice.actions;

export default inventorySlice.reducer;
