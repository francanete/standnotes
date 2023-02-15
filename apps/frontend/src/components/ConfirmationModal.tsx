import { Modal, ModalProps } from "./Modal";
import styles from "./ConfirmationModal.module.scss";
import { Button } from "./Button";

interface IConfirmationModal extends Omit<ModalProps, "children"> {
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
}

export const ConfirmationModal = ({
  title,
  onClose,
  isOpen,
  onConfirm,
  setOpen,
}: IConfirmationModal) => {
  return (
    <Modal
      className={styles["ConfirmationModal"]}
      title={title}
      onClose={onClose}
      isOpen={isOpen}
    >
      <div className={styles["ConfirmationModal__content"]}>
        <p>Do you really want to delete it?</p>
        <div className={styles["ConfirmationModal__buttons"]}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={onConfirm}>Delete</Button>
        </div>
      </div>
    </Modal>
  );
};
