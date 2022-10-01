import React from "react";

import styles from "./Button.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, onClick }: IButton) => {
  return (
    <button onClick={onClick} className={styles["Button"]}>
      {children}
    </button>
  );
};
