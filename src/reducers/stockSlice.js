import { createSlice } from "@reduxjs/toolkit";

const initialState = { stock: [] };

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStock: (state, { payload }) => {
      state.stock = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStock } = stockSlice.actions;

export default stockSlice.reducer;
