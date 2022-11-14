import { createSlice } from "@reduxjs/toolkit";
import { setStore } from "../localStorage";

const initialState = [];

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStock: (state, action) => {
      state.push(action.payload);
      setStore({ key: "stock", data: state });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStock } = stockSlice.actions;

export default stockSlice.reducer;
