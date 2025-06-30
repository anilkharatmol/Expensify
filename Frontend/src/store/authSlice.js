import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authenticate",
  initialState: {
    isLoggedIn: false,
  },

  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
