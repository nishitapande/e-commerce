import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: { cart: [] },
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    login: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem,login } =
  cartSlice.actions;
export default cartSlice.reducer;
