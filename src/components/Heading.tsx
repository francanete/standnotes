import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./Heading.module.scss";

interface PropsType {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
  underline?: boolean;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading = ({ level, underline, children = null }: PropsType) => {
  const Tag = `h${level}` as HeadingTag;
  return (
    <Tag
      className={classNames(styles["Heading"], {
        [styles["Heading--underline"]]: underline,
      })}
    >
      {children}
    </Tag>
  );
};
