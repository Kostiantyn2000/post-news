import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { authActions } from "./store/auth";
import { Storages } from "./types/enum/storage.enum";

function App() {
  const dispatch = useDispatch<any>();

  const auth = JSON.parse(localStorage.getItem(Storages.AUTH) || "{}");
  const { username, password, isLoggedIn } = auth;

  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(
      authActions.login({
        username,
        password,
        isLoggedIn: isLoggedIn || false,
      })
    );
    i18n.changeLanguage("en");
    localStorage.setItem(
      Storages.AUTH,
      JSON.stringify({
        username: "admin",
        password: "12345",
        isLoggedIn: false,
      })
    );
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
