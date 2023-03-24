import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import popupReducer from "../reducers/popupSlice";
import companyReducer from "../reducers/companySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer,
    company: companyReducer,
  },
});
