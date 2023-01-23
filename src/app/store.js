import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import popupReducer from "../reducers/popupSlice";
import invoiceReducer from "../reducers/invoicesSlice";
import stockReducer from "../reducers/stockSlice";
import companyReducer from "../reducers/companySlice";
import toastReducer from "../reducers/toastSlice";

//create a redux store.
export const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer,
    invoices: invoiceReducer,
    stock: stockReducer,
    company: companyReducer,
    toast: toastReducer,
  },
});
