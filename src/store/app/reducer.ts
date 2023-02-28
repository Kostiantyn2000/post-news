import i18n from "@/i18n";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  language: string;
}

const initialState: IAppState = {
  language: "en",
};

const languageSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      console.log("action.payload", action.payload);

      i18n.changeLanguage(action.payload);
      state.language = action.payload;
    },
  },
});

export const appAuctions = { ...languageSlice.actions };
export const appReducer = languageSlice.reducer;
