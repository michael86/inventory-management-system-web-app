import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    getInvoice: (state, { id }) => {
      return state.invoices[id];
    },
    getInvoices: (state) => {
      return state.invoices;
    },
    addInvoice: (state, { payload }) => {
      //Gen new invoice. Items left as default will be updated once user settings are complete
      state.invoices.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getInvoice, getInvoices, addInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
