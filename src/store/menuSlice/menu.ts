import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = menu.actions;

export default menu.reducer;
