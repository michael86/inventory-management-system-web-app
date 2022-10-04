import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: 0,
  show: false,
  invoice: {},
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
    setPopupInvoice: (state, action) => {
      state.invoice = action.payload;
    },
  },
});

export const { setPopupScreen, togglePopup, setPopupInvoice } =
  popupSlice.actions;

export default popupSlice.reducer;
