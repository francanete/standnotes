import { Tasks } from "../types/notes";
import { AddTaskForm } from "./forms/AddTaskForm";
import { Modal, ModalProps } from "./Modal";

interface IEditTaskModal extends Omit<ModalProps, "children"> {
  taskId?: string;
  noteId: string;
  taskIndex: number;
  tasks: Tasks[];
}

export const EditTaskModal = ({
  title,
  onClose,
  isOpen,
  taskId,
  noteId,
  taskIndex,
  tasks,
}: IEditTaskModal) => {
  return (
    <Modal title={title} onClose={onClose} isOpen={isOpen}>
      {<span>{tasks[taskIndex].titleTask}</span>}
      {/* I will need to pass:
       * noteId
       * incitialValues
       */}
      <AddTaskForm noteId={noteId} />
    </Modal>
  );
};
