import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";

//create a redux store.
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
