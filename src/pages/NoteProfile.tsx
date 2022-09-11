import { useNavigate, useParams } from "react-router-dom";
import { useNoteQuery } from "../queries/useNoteQuery";
import { AddTaskForm } from "../components/forms/AddTaskForm";
import { formatDate } from "../utils/dateformatter";
import { useNoteDeleteMutation } from "../queries/useNoteDeleteMutation";
import { Loading } from "../components/Loading";
import { useTaskDeleteMutation } from "../queries/useTaskDeleteMutation";

export const NoteProfile = () => {
  const { noteId } = useParams();
  const nav = useNavigate();
  const { mutateAsync } = useNoteDeleteMutation();
  const { mutateAsync: deleteTask } = useTaskDeleteMutation(noteId!);
  const { data: note } = useNoteQuery(noteId!);

  if (!noteId) {
    return <Loading />;
  }

  const handleDeleteNote = () => {
    mutateAsync(noteId!);
    nav("/");
  };

  return (
    <>
      <div>NoteProfile</div>
      <h1>{note?.title}</h1>
      <button onClick={handleDeleteNote}>Delete</button>
      <p>{note?.description}</p>
      <span>{formatDate(note?.date!)}</span>
      {note?.tasks?.map((task) => (
        <div key={task._id}>
          <p>{task?.titleTask}</p>
          <p>{task?.descriptionTask}</p>
          <button onClick={() => deleteTask(task._id!)}>Delete task</button>
        </div>
      ))}
      <AddTaskForm noteId={note?._id!} />
    </>
  );
};
