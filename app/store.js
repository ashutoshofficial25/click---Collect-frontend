import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";

export const store = configureStore({
  reducer: {
    //reducers here
    user: userReducer,
  },
});
