import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: "",
  body: "",
  footer: "",
  show: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setHeader(state, action) {
      state.header = action.payload;
    },

    setBody(state, action) {
      state.body = action.payload;
    },

    setFooter(state, action) {
      state.footer = action.payload;
    },

    setPopup(state, action) {
      this.setHeader(state, action.payload.header);
      this.setHBody(state, action.payload.body);
      this.setFooter(state, action.payload.footer);
    },

    togglePopup(state) {
      state.show = !state.show;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHeader, setBody, setFooter, setPopup, togglePopup } =
  popupSlice.actions;

export default popupSlice.reducer;
