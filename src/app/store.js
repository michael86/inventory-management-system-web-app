import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//create a redux store.
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
