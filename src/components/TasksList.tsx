import { useState } from "react";
import { useTaskDeleteMutation } from "../queries/useTaskDeleteMutation";
import { INotes } from "../types/notes";
import { EditTaskModal } from "./EditTaskModal";
import DOMPurify from "dompurify";
import { Paragraph } from "./Paragraph";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

import styles from "./TasksList.module.scss";
import { ConfirmationModal } from "./ConfirmationModal";

export const TasksList = ({ note }: { note: INotes }) => {
  const { mutateAsync: deleteTask } = useTaskDeleteMutation(note._id!);
  const [isOpen, setIsOpen] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);
  const [taskId, setTaskId] = useState<string>();

  const handleEditTask = (taskId: string | undefined, index: number) => {
    setIsOpen(true);
    setTaskIndex(index);
    setTaskId(taskId);
  };

  const createMarkup = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      {note?.tasks?.map((task, index) => (
        <>
          <div key={task._id} className={styles["TasksList"]}>
            <div className={styles["TasksList__header"]}>
              <Paragraph bold>{task.titleTask}</Paragraph>
              <div className={styles["TasksList__actions"]}>
                <button
                  className={styles["TasksList__actionButton"]}
                  onClick={() => {
                    deleteTask(task._id!);
                  }}
                >
                  <RiDeleteBin6Line size={18} color="#ff7b73" />
                </button>
                <button
                  className={styles["TasksList__actionButton"]}
                  onClick={() => handleEditTask(task._id, index)}
                >
                  <BiEditAlt size={18} color="#383838aa" />
                </button>
              </div>
            </div>
            <div
              className={styles["TasksList__description"]}
              dangerouslySetInnerHTML={createMarkup(task.descriptionTask)}
            />
          </div>
        </>
      ))}

      {note.tasks && taskId && (
        <EditTaskModal
          title="Update Task"
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          noteId={note._id!}
          taskIndex={taskIndex}
          tasks={note.tasks}
          taskId={taskId}
          setOpen={setIsOpen}
        />
      )}
    </>
  );
};
