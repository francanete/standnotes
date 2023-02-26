import React, { FC } from "react";
import { Heading } from "./Heading";

import styles from "./AlertComponent.module.scss";

interface IAlertComponent {
  status?: "success" | "error" | "warning" | "info";
  header: string;
}

export const AlertComponent: FC<IAlertComponent> = ({ header }) => {
  return (
    <div className={styles.AlertComponent}>
      <Heading level={2}>{header}</Heading>
    </div>
  );
};
