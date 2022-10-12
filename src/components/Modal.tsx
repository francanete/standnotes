import React from "react";
import iconX from "../../images/x.svg";
import { Heading } from "./Heading";

import styles from "./Modal.module.scss";

// import "./Modal.component.css";

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={styles["Modal"]}>
      <div
        ref={outsideRef}
        className={styles["Modal__overlay"]}
        onClick={handleCloseOnOverlay}
      />
      <div className={styles["Modal__box"]}>
        <button className={styles["Modal__close"]} onClick={onClose}>
          {/* <img src={iconX} alt={"close"} /> */}
          <span>X</span>
        </button>
        <Heading level={1}>{title}</Heading>
        <div className={styles["Modal__content"]}>{children}</div>
      </div>
    </div>
  ) : null;
};
