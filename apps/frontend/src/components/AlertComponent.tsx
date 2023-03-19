import React, { FC } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import classnames from "classnames";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TbAlertTriangle } from "react-icons/tb";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

import styles from "./AlertComponent.module.scss";

interface IAlertComponent {
  status: "success" | "error" | "warning" | "info";
  header?: string;
}

const renderStatusIcon = (status: string) => {
  if (status === "success") {
    return <IoCheckmarkDoneSharp size={24} />;
  } else if (status === "error") {
    return <MdOutlineReportGmailerrorred size={24} />;
  } else {
    return <TbAlertTriangle size={24} />;
  }
};

const defaultHeader = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1) + "!";
};

export const AlertComponent: FC<IAlertComponent> = ({ header, status }) => {
  return (
    <div
      className={classnames(
        styles["AlertComponent"],
        styles[`AlertComponent--${status}`]
      )}
    >
      <div className={styles["AlertComponent__header"]}>
        {renderStatusIcon(status)}
        <Heading level={2}>{header ? header : defaultHeader(status)}</Heading>
      </div>
      <Paragraph>Check your email for a confirmation link.</Paragraph>
    </div>
  );
};
