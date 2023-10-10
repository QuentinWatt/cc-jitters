import { createSlice } from "@reduxjs/toolkit";
import Product from "../../models/Product";

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: { payload: Product }) => {
      state.products.push(payload);
    },
    removeFromCart: (state, { payload }: { payload: Product }) => {
      const index = state.products.indexOf(payload);
      state.products.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;
export default cart.reducer;
