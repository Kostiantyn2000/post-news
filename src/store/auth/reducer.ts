import { Storages } from "@/types/enum/storage.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "./namspase";

export interface IAuthState {
  login: { username: string; password: string; isLoggedIn: boolean } | null;
}

const initialState: IAuthState = {
  login: { username: "", password: "", isLoggedIn: false },
};

const authSlice = createSlice({
  name: Storages.AUTH,
  initialState,
  reducers: {
    login(state, action: PayloadAction<Auth.ICreateLoginReq>) {
      state.login = { ...action.payload };
    },
    logout(state) {
      state.login = null;
    },
  },
});

export const authActions = { ...authSlice.actions };
export const authReducer = authSlice.reducer;
