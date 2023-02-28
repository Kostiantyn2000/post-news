import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer, IAppState } from "./app";
import { IAuthState, authReducer } from "./auth";
import { IPostState, postReducer } from "./post";

const rootReducer = combineReducers<{
  post: IPostState;
  auth: IAuthState;
  app: IAppState;
}>({
  post: postReducer,
  auth: authReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
