import { createSlice } from "@reduxjs/toolkit";
import { setStore } from "../localStorage";

const initialState = {
  invoices: [
    {
      id: "fkldasfkjdddddhkj",

      date_generated: 955666812 * 1000,
      from: "photomechanical",
      to: "you",
      shipping: {
        name: "Micheal",
        address: "1234 Main Street",
        city: "Dubai",
        state: "Dubai",
        country: "UAE",
        postal_code: 94111,
      },
      items: [
        {
          item: "Chair",
          description: "Wooden chair",
          quantity: 1,
          price: 50.0,
          tax: "10%",
        },
        {
          item: "Watch",
          description: "Wall watch for office",
          quantity: 2,
          price: 30.0,
          tax: "10%",
        },
        {
          item: "Water Glass Set",
          description: "Water glass set for office",
          quantity: 1,
          price: 35.0,
          tax: "",
        },
      ],
      subtotal: 156,
      total: 156,
      order_number: 1234222,
      header: {
        company_name: "Nice Invoice",
        company_logo: "logo.png",
        company_address:
          "Nice Invoice. 123 William Street 1th Floor New York, NY 123456",
      },
      footer: {
        text: "This is footer - you can add any text here",
      },
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
  ],
};

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
    addInvoice: (state, { invoice }) => {
      //Gen new invoice. Items left as default will be updated once user settings are complete

      state.invoices.push(invoice);
      setStore({ key: "invoices", data: state.invoices });
    },
  },
});

// Action creators are generated for each case reducer function
export const { getInvoice, getInvoices, addInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
