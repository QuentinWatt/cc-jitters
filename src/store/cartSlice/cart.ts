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
  },
});

export const { addToCart } = cart.actions;
export default cart.reducer;
