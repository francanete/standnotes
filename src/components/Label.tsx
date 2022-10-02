import { HTMLProps } from "react";

import styles from "./Label.module.scss";

export const Label = (props: HTMLProps<HTMLLabelElement>) => {
  return <label {...props} className={styles["Label"]}></label>;
};
