import { RootState } from "@/store";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const ProfileScreen = () => {
  const { t } = useTranslation();

  const auth = useSelector((state: RootState) => state.auth.login);

  return (
    <>
      PROFILE
      <Box sx={{ mt: 15 }}>
        <Typography>
          {t("title.name")}: {auth?.username}
        </Typography>
        <Typography>
          {t("description")}: {t("title.description")} {auth?.username}
          {t("title.love")}
        </Typography>
      </Box>
    </>
  );
};
