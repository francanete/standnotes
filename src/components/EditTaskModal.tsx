import { Tasks } from "../types/notes";
import { UpdateTaskForm } from "./forms/UpdateTaskForm";
import { Modal, ModalProps } from "./Modal";

interface IEditTaskModal extends Omit<ModalProps, "children"> {
  taskId?: string;
  noteId: string;
  taskIndex: number;
  tasks: Tasks[];
  setOpen: (open: boolean) => void;
}

export const EditTaskModal = ({
  title,
  onClose,
  isOpen,
  taskId,
  noteId,
  taskIndex,
  tasks,
  setOpen,
}: IEditTaskModal) => {
  return (
    <Modal title={title} onClose={onClose} isOpen={isOpen}>
      {<span>{tasks[taskIndex].titleTask}</span>}
      {/* I will need to pass:
       * noteId
       * incitialValues
       */}
      <UpdateTaskForm setOpen={setOpen} taskId={taskId!} />
    </Modal>
  );
};
