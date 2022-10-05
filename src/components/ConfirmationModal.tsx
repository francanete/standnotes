import React from "react";
import { Modal, ModalProps } from "./Modal";

interface IConfirmationModal extends Omit<ModalProps, "children"> {
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
}

export const ConfirmationModal = ({
  title,
  onClose,
  isOpen,
  onConfirm,
}: IConfirmationModal) => {
  return (
    <Modal title={title} onClose={onClose} isOpen={isOpen}>
      <p>Are you sure?</p>
      <button onClick={onConfirm}>Yes</button>
    </Modal>
  );
};
