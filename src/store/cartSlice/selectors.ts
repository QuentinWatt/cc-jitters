import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const cartCount = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let count: number = 0;
    items.forEach((item) => {
      count = count + item.quantity;
    });
    return count;
  }
);

export const cartTotal = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let total: number = 0;
    items.forEach((item) => {
      total = Number(total) + Number(item.product.price) * item.quantity;
    });
    return total;
  }
);
