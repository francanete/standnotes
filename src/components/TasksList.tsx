import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNoteDeleteMutation } from "../queries/useNoteDeleteMutation";
import { useTaskDeleteMutation } from "../queries/useTaskDeleteMutation";
import { INotes } from "../types/notes";
import { EditTaskModal } from "./EditTaskModal";

export const TasksList = ({ note }: { note: INotes }) => {
  const nav = useNavigate();
  const { mutateAsync } = useNoteDeleteMutation();
  const { mutateAsync: deleteTask } = useTaskDeleteMutation(note._id!);

  const [isOpen, setIsOpen] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);

  const handleEditTask = (taskId: string | undefined, index: number) => {
    setIsOpen(true);
    setTaskIndex(index);
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
      <EditTaskModal
        title="Update Task"
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        noteId={note?._id!}
        taskIndex={taskIndex}
        tasks={note?.tasks!}
      />
    </>
  );
};
