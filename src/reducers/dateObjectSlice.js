import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dateObjectslice = createSlice({
  name: "dateObject",
  initialState,
  reducers: {
    setDateObject: (state, { payload }) => {
      state.dateObject = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDateObject } = dateObjectslice.actions;

export default dateObjectslice.reducer;
