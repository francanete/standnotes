import React from "react";
import { Heading } from "./Heading";
import { IoClose } from "react-icons/io5";

import styles from "./Modal.module.scss";
import classNames from "classnames";
export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={classNames(styles["Modal"], className)}>
      <div
        ref={outsideRef}
        className={styles["Modal__overlay"]}
        onClick={handleCloseOnOverlay}
      />
      <div className={styles["Modal__box"]}>
        <button className={styles["Modal__close"]} onClick={onClose}>
          <IoClose size={24} className={styles["Modal__closeIcon"]} />
        </button>
        <Heading level={1}>{title}</Heading>
        <div className={styles["Modal__content"]}>{children}</div>
      </div>
    </div>
  ) : null;
};
