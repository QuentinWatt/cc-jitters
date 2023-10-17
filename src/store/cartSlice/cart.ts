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
    addToCart: (
      state,
      { payload }: { payload: Product }
    ) => {
      const { title, price } = payload;
      const itemInCart = state.items.find(
        (item) => item.product.title === payload.title
      );
      if (!itemInCart) {
        state.items.push({
          product: {
            title,
            price,
          },
          quantity: 1,
        });
      } else {
        itemInCart.quantity++;
      }
    },
    removeFromCart: (
      state,
      { payload }: { payload: Product }
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.product.title == payload.title
      );
      if (itemIndex !== undefined) {
        state.items.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (
      state,
      { payload }: { payload: Product }
    ) => {
      const itemInCart = state.items.find(
        (item) => item.product.title === payload.title
      );
      itemInCart && itemInCart.quantity++;
    },
    decreaseQuantity: (
      state,
      { payload }: { payload: Product }
    ) => {
      const itemInCart = state.items.find(
        (item) => item.product.title === payload.title
      );
      itemInCart && itemInCart.quantity--;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cart.actions;

export default cart.reducer;
