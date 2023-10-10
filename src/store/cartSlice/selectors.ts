import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const cartCount = createSelector(
  (state: RootState) => state.cart.products,
  (products) => products.length
);

export const cartTotal = createSelector(
  (state: RootState) => state.cart.products,
  (products) => {
    let total: number = 0;
    products.forEach((product) => {
      total = Number(total) + Number(product.price);
    });
    return total;
  }
);
