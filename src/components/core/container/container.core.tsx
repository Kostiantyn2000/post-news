import CssBaseline from "@mui/material/CssBaseline";
import SimpleContainer from "@mui/material/Container";
import { FC, ReactNode } from "react";
import styles from "./container.module.css";

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <SimpleContainer className={`${styles.container}`} maxWidth="lg">
        {children}
      </SimpleContainer>
    </>
  );
};
