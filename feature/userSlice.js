import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      console.log("log: action", action.payload);
      state.user = null;
      state.token = null;
    },
  },
});

export const { userLogin, logout } = userSlice.actions;

export default userSlice.reducer;
