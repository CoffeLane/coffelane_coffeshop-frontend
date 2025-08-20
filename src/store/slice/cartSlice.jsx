import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // { [productId]: { product, quantity } }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      if (state.items[product.id]) {
        state.items[product.id].quantity += quantity;
      } else {
        state.items[product.id] = { product, quantity };
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;