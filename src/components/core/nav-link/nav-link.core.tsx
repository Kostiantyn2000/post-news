import React, { FC } from "react";
import { NavLink as Link } from "react-router-dom";
import styles from "./index.module.css";

interface IProps {
  url: string;
  title: string;
}

export const NavLink: FC<IProps> = ({ url, title }) => {
  return (
    <Link
      to={url}
      className={styles.navLink}
      style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
    >
      {title}
    </Link>
  );
};
