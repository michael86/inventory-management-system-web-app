import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: 0,
  show: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupScreen: (state, action) => {
      state.screen = action.payload;
    },
    togglePopup: (state) => {
      state.show = !state.show;
    },
  },
});

export const { setPopupScreen, togglePopup } = popupSlice.actions;

export default popupSlice.reducer;
