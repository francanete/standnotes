// create a custom paragraph component
import classNames from "classnames";
import React from "react";
import styles from "./Paragraph.module.scss";

enum fontSize {
  small = "small",
  medium = "medium",
  large = "large",
}

interface PropsType {
  children?: React.ReactNode;
  bold?: boolean;
  size?: "small" | "medium" | "large";
}

export const Paragraph = ({ children = null, bold, size }: PropsType) => {
  return (
    <p
      className={classNames(styles["Paragraph"], {
        [styles["Paragraph--bold"]]: bold,
        [styles["Paragraph--small"]]: size === fontSize.small,
      })}
    >
      {children}
    </p>
  );
};
