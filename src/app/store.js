import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import popupReducer from "../reducers/popupSlice";
import stockReducer from "../reducers/stockSlice";
import companyReducer from "../reducers/companySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer,
    stock: stockReducer,
    company: companyReducer,
  },
});
