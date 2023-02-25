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
      state.user = null;
    },
  },
});

export const { userLogin, logout } = userSlice.actions;

export default userSlice.reducer;
