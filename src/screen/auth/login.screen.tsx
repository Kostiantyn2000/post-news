import { authActions } from "@/store/auth";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "@material-ui/core";
import styles from "./index.module.css";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { RouteKey } from "@/types/enum";
import { Storages } from "@/types/enum/storage.enum";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const auth = JSON.parse(localStorage.getItem(Storages.AUTH) || "{}");
  const { username: name, password: pass } = auth;

  const handleLogin = () => {
    if (username === name && password === pass) {
      dispatch(authActions.login({ username, password, isLoggedIn: true }));
      localStorage.setItem(
        Storages.AUTH,
        JSON.stringify({ username, password, isLoggedIn: true })
      );
      navigate(RouteKey.PROFILE);
    }

    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Typography variant="h2" component={"h2"}>
          {t("title.authorization")}
        </Typography>
        <TextField
          style={{ marginTop: 30 }}
          label={t("label.user")}
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          style={{ marginTop: 30 }}
          label={t("label.password")}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          {t("login")}
        </Button>
      </div>
      <Modal
        className={styles.modalLoginContainer}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={styles.modalWrapper}>
          <p style={{ color: "#bd2424" }}>{t("errorLogin")}</p>
          <button
            type="submit"
            className={styles.buttonLogin}
            onClick={() => setOpen((prev) => !prev)}
          >
            {t("title.close")}
          </button>
        </div>
      </Modal>
    </>
  );
};
