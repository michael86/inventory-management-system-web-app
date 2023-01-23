import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  header: {},
  body: "",
};

export const toastSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggleToast: (state) => {
      state.show = !state.show;
    },
    setToastHeader: (state, { payload }) => {
      state.header = payload;
    },
    setToastBody: (state, { payload }) => {
      state.body = payload;
    },
  },
});

export const { toggleToast, setToastHeader, setToastBody } = toastSlice.actions;

export default toastSlice.reducer;
