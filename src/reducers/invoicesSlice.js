import { createSlice } from "@reduxjs/toolkit";
// import { setStore, updateStore } from "../localStorage";

const initialState = {
  invoices: [
    {
      date_generated: 1654527109 * 1000,
      from: "Creekview",
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
    {
      date_generated: 1665067909 * 1000,
      from: "me",
      to: "Creekview",
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
    {
      date_generated: 1601995909 * 1000,
      from: "me",
      to: "Photomechanical",
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
    {
      date_generated: 1601995909 * 1000,
      from: "me",
      to: "creekvieew",
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
    {
      date_generated: 1607788309 * 1000,
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
    {
      date_generated: 1657810309 * 1000,
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
    {
      date_generated: 1655218309 * 1000,
      from: "creekview",
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
    {
      date_generated: 1660488709 * 1000,
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
    {
      date_generated: 1663167109 * 1000,
      from: "creekview",
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
    {
      date_generated: 1694703109 * 1000,
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
    getInvoices: (state, { id }) => {
      return state.invoices;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getInvoice, getInvoices } = invoiceSlice.actions;

export default invoiceSlice.reducer;
