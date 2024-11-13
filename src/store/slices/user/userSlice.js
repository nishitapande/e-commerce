import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    setUser(state, action) {
      console.log("action: ", action);
      state.token = action.payload;
    },
    clearUser(state) {
      state.token = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
