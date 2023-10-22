import { configureStore } from "@reduxjs/toolkit";
import menu from "./menuSlice/menu";
import cart from "./cartSlice/cart";
import auth from "./authSlice/auth";

export const store = configureStore({
  reducer: {
    auth,
    menu,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
