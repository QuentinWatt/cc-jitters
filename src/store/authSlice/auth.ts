import { createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";

export interface AuthState {
  user_id: string | null;
  user_email: string | null;
}

const initialState: AuthState = {
  user_id: null,
  user_email: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (
      state,
      { payload }: { payload: User }
    ) => {
      state.user_id = payload.id;
      state.user_email = payload.email;
    },
  },
});

export const { setAuthUser } = auth.actions;
export default auth.reducer;
