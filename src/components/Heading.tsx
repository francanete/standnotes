import { ReactNode } from "react";

import styles from "./Heading.module.scss";

interface PropsType {
  level: 1 | 2 | 3 | 5 | 6;
  children?: ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading = ({ level, children = null }: PropsType) => {
  const Tag = `h${level}` as HeadingTag;
  return <Tag className={styles["Heading"]}>{children}</Tag>;
};
