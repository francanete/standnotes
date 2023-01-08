import classNames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  ...props
}: IButton) => {
  return (
    <button
      disabled={disabled}
      type={props.type}
      onClick={onClick}
      className={classNames(styles["Button"], className, {
        [styles["Button--disabled"]]: disabled,
      })}
    >
      {children}
    </button>
  );
};
