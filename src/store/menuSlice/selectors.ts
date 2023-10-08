import { createSelector } from "@reduxjs/toolkit";

export const isOpenSelector = createSelector(
  (state) => state.menu.isOpen,
  (isOpen) => isOpen
);
