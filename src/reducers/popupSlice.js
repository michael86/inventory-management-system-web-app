import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: 0,
  show: false,
  invoice: {},
  stock: {},
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupScreen: (state, { payload }) => {
      state.screen = payload;
    },
    togglePopup: (state) => {
      state.show = !state.show;
    },
    setPopupInvoice: (state, { payload }) => {
      state.invoice = payload;
    },
    setPopupStock: (state, { payload }) => {
      state.stock = payload;
    },
  },
});

export const { setPopupScreen, togglePopup, setPopupInvoice, setPopupStock } =
  popupSlice.actions;

export default popupSlice.reducer;
