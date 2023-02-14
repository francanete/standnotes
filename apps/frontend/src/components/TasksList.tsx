import { useState } from "react";
import { useTaskDeleteMutation } from "../queries/useTaskDeleteMutation";
import { INotes } from "../types/notes";
import { EditTaskModal } from "./EditTaskModal";
import DOMPurify from "dompurify";
import { ActionButtons } from "./ActionButtons";

import styles from "./TasksList.module.scss";
import { ConfirmationModal } from "./ConfirmationModal";
import { Heading } from "./Heading";

export const TasksList = ({ note }: { note: INotes }) => {
  const { mutateAsync: deleteTask } = useTaskDeleteMutation(note._id!);
  const [isOpen, setIsOpen] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);
  const [taskId, setTaskId] = useState<string>();
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);

  const handleEditTask = (taskId: string | undefined, index: number) => {
    setIsOpen(true);
    setTaskIndex(index);
    setTaskId(taskId);
  };

  const handleDeleteTask = (taskId: string | undefined) => {
    taskId && deleteTask(taskId);
    setIsOpenConfirmation(false);
  };

  const createMarkup = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      {note?.tasks?.map((task, index) => (
        <div key={task._id} className={styles["TasksList"]}>
          <div className={styles["TasksList__header"]}>
            <Heading level={4}>{task.titleTask}</Heading>
            <ActionButtons
              // onDelete={() => console.log("delete")}
              onDelete={() => setIsOpenConfirmation(true)}
              onEdit={() => handleEditTask(task._id, index)}
            />
          </div>
          <div
            className={styles["TasksList__description"]}
            dangerouslySetInnerHTML={createMarkup(task.descriptionTask)}
          />
        </div>
      ))}

      {note.tasks && (
        <>
          <EditTaskModal
            title="Update Task"
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            noteId={note._id}
            taskIndex={taskIndex}
            tasks={note.tasks}
            taskId={taskId}
            setOpen={setIsOpen}
          />
          <ConfirmationModal
            title="Delete Note"
            isOpen={isOpenConfirmation}
            onClose={() => setIsOpenConfirmation(false)}
            setOpen={setIsOpenConfirmation}
            onConfirm={() => handleDeleteTask(taskId)}
          />
        </>
      )}
    </>
  );
};
