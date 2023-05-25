import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: 0,
  show: false,
  invoice: {},
  stock: {},
  message: {},
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
    setPopupText: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { setPopupScreen, togglePopup, setPopupInvoice, setPopupStock, setPopupText } =
  popupSlice.actions;

export default popupSlice.reducer;
