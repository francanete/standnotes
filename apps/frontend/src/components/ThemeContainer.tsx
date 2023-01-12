import React, { PropsWithChildren } from "react";
import useLocalStorage from "use-local-storage";
import { MainFooter } from "./MainFooter";
import { NavBar } from "./NavBar";

import styles from "./ThemeContainer.module.scss";

export const ThemeContainer = ({
  children,
  ...rest
}: {
  children: PropsWithChildren<React.ReactNode>;
}) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={styles["ThemeComtainer"]} {...rest} data-theme={theme}>
      <NavBar theme={theme} switchTheme={switchTheme} />
      {children}
      <MainFooter />
    </div>
  );
};
