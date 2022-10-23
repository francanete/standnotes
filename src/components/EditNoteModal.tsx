import { UpdateNoteForm } from "./forms/UpdateNoteForm";
import { Modal, ModalProps } from "./Modal";

interface IEditNoteModal extends Omit<ModalProps, "children"> {
  noteId: string;
  setOpen: (open: boolean) => void;
}

export const EditNoteModal = ({
  title,
  onClose,
  isOpen,
  noteId,
  setOpen,
}: IEditNoteModal) => {
  return (
    <Modal title={title} onClose={onClose} isOpen={isOpen}>
      <UpdateNoteForm setOpen={setOpen} noteId={noteId} />
    </Modal>
  );
};
