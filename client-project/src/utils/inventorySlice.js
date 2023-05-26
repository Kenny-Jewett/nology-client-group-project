import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    items: [],
    laptops: [],
    headphones: [],
    smartwatches: [],
    speakers: [],
    userSelection: "",
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

    updateUserSelection: (state, action) => {
      return {
        ...state,
        userSelection: action.payload,
      };
    },

    loadHeadphones: (state, action) => {
      return {
        ...state,
        headphones: action.payload,
      };
    },

    loadSmartwatches: (state, action) => {
      return {
        ...state,
        smartwatches: action.payload,
      };
    },
    loadSpeakers: (state, action) => {
      return {
        ...state,
        speakers: action.payload,
      };
    },
  },
});

export const {
  loadItems,
  loadLaptops,
  loadHeadphones,
  loadSmartwatches,
  loadSpeakers,
  updateUserSelection,
} = inventorySlice.actions;

export default inventorySlice.reducer;
