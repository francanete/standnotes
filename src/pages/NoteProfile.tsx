import { useNavigate, useParams } from "react-router-dom";
import { useNoteQuery } from "../queries/useNoteQuery";
import { AddTaskForm } from "../components/forms/AddTaskForm";
import { formatDate } from "../utils/dateformatter";
import { useNoteDeleteMutation } from "../queries/useNoteDeleteMutation";
import { Loading } from "../components/Loading";
import { useTaskDeleteMutation } from "../queries/useTaskDeleteMutation";
import { Modal, ModalProps } from "../components/Modal";
import { useState } from "react";
import { useTaskQuery } from "../queries/useTaskQuery";
import { EditTaskModal } from "../components/EditTaskModal";

export const NoteProfile = () => {
  const { noteId } = useParams();
  const nav = useNavigate();
  const { mutateAsync } = useNoteDeleteMutation();
  const { mutateAsync: deleteTask } = useTaskDeleteMutation(noteId!);
  const { data: note } = useNoteQuery(noteId!);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [taskIndex, setTaskIndex] = useState(0);

  if (!noteId) {
    return <Loading />;
  }

  const handleDeleteNote = () => {
    mutateAsync(noteId!);
    nav("/");
  };

  const handleEditTask = (taskId: string, index: number) => {
    setIsOpen(true);
    setSelectedTaskId(taskId);
    setTaskIndex(index);
  };

  return (
    <>
      <div>NoteProfile</div>
      <h1>{note?.title}</h1>
      <button onClick={handleDeleteNote}>Delete</button>
      <p>{note?.description}</p>
      <span>{formatDate(note?.date!)}</span>
      {note?.tasks?.map((task, index) => (
        <div key={task._id}>
          <p>{task?.titleTask}</p>
          <p>{task?.descriptionTask}</p>
          <button onClick={() => deleteTask(task._id!)}>Delete task</button>
          <button onClick={() => handleEditTask(task._id!, index)}>
            Edit Task
          </button>
        </div>
      ))}
      <AddTaskForm noteId={note?._id!} />
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
