import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  screen: 0, //page 0 login, page 1 register
  errors: [],
};

export const loginRegisterSlice = createSlice({
  name: "loginRegisterPopup",
  initialState,
  reducers: {
    togglePopup(state) {
      state.show = !state.show;
    },

    setScreen(state, action) {
      state.screen = action.payload;
    },

    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const { togglePopup, setScreen, setErrors } = loginRegisterSlice.actions;

export default loginRegisterSlice.reducer;
