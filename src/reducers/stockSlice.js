import { createSlice } from "@reduxjs/toolkit";
import { setStore } from "../localStorage";
import { getStore } from "../localStorage";

const initialState = { stock: getStore("stock") || [] };

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStock: (state, { payload }) => {
      state.stock = payload;
      setStore({ key: "stock", data: payload });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStock } = stockSlice.actions;

export default stockSlice.reducer;
