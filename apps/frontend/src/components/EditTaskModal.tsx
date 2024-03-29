import { Tasks } from "../types/notes";
import { UpdateTaskForm } from "./forms/UpdateTaskForm";
import { Modal, ModalProps } from "./Modal";

interface IEditTaskModal extends Omit<ModalProps, "children"> {
  taskId?: string;
  noteId?: string;
  taskIndex: number;
  tasks: Tasks[];
  setOpen: (open: boolean) => void;
}

export const EditTaskModal = ({
  title,
  onClose,
  isOpen,
  taskIndex,
  tasks,
  setOpen,
}: IEditTaskModal) => {
  return (
    <Modal title={title} onClose={onClose} isOpen={isOpen}>
      <UpdateTaskForm setOpen={setOpen} taskId={tasks[taskIndex]._id!} />
    </Modal>
  );
};
