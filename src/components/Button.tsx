import React from "react";

import styles from "./Button.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, onClick, ...props }: IButton) => {
  return (
    <button type={props.type} onClick={onClick} className={styles["Button"]}>
      {children}
    </button>
  );
};
