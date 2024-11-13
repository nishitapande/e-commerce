import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload;
    },
    clearUser(state) {
      state.userInfo = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
