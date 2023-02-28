import { RootState } from "@/store";
import { appAuctions } from "@/store/app";
import { MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const SelectComponent = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const language = useSelector((state: RootState) => state.app.language);

  const handleLanguageChange = (val: any) => {
    // dispatch(appAuctions.setLanguage(val.target.value));
    // localStorage.setItem("language", val.target.value);
    i18n.changeLanguage(val.target.value);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Language"
      value={i18n.language}
      onChange={(val) => handleLanguageChange(val)}
    >
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="uk">UA</MenuItem>
    </Select>
  );
};
