import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import popupReducer from "../reducers/popupSlice";
import invoiceReducer from "../reducers/invoicesSlice";

//create a redux store.
export const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer,
    invoices: invoiceReducer,
  },
});
