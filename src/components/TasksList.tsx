import { useState } from "react";
import { useTaskDeleteMutation } from "../queries/useTaskDeleteMutation";
import { INotes } from "../types/notes";
import { EditTaskModal } from "./EditTaskModal";

export const TasksList = ({ note }: { note: INotes }) => {
  const { mutateAsync: deleteTask } = useTaskDeleteMutation(note._id!);
  const [isOpen, setIsOpen] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);
  const [taskId, setTaskId] = useState("");

  const handleEditTask = (taskId: string | undefined, index: number) => {
    setIsOpen(true);
    setTaskIndex(index);
    setTaskId(taskId!);
  };

  return (
    <>
      {note?.tasks?.map((task, index) => (
        <div key={task._id}>
          <p>{task.titleTask}</p>
          <p>{task.descriptionTask}</p>
          <button onClick={() => deleteTask(task._id!)}>Delete task</button>
          <button onClick={() => handleEditTask(task._id, index)}>
            Edit Task
          </button>
        </div>
      ))}
      {note.tasks && (
        <EditTaskModal
          title="Update Task"
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          noteId={note?._id!}
          taskIndex={taskIndex}
          tasks={note?.tasks}
          taskId={taskId}
          setOpen={setIsOpen}
        />
      )}
    </>
  );
};
