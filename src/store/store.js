import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart/cartSlice";
import userSlice from "./slices/user/userSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});
