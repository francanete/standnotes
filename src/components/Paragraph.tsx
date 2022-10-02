// create a custom paragraph component
import React from "react";
import styles from "./Paragraph.module.scss";

interface PropsType {
  children?: React.ReactNode;
}

export const Paragraph = ({ children = null }: PropsType) => {
  return <p className={styles["Paragraph"]}>{children}</p>;
};
