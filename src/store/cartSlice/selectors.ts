import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const cartCount = createSelector(
  (state: RootState) => state.cart.products,
  (products) => products.length
);
