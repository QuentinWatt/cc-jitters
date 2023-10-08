import { configureStore } from "@reduxjs/toolkit";
import menu from "./menuSlice/menu";

export const store = configureStore({
  reducer: {
    menu,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
