import { createSlice } from "@reduxjs/toolkit";
import Product from "../../models/Product";
import CartItem from "../../models/CartItem";

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: { payload: Product }) => {
      const itemInCart = state.items.find(
        (item) => item.product.title === payload.title
      );
      if (!itemInCart) {
        state.items.push({
          product: payload,
          quantity: 1,
        });
      } else {
        itemInCart.quantity++;
      }
    },
  },
});

export const { addToCart } = cart.actions;
export default cart.reducer;
