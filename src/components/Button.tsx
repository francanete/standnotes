import React from "react";

import styles from "./Button.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children }: IButton) => {
  return <button className={styles["Button"]}>{children}</button>;
};
