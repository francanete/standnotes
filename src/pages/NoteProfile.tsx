import { useNavigate, useParams } from "react-router-dom";
import { useNoteQuery } from "../queries/useNoteQuery";
import { AddTaskForm } from "../components/forms/AddTaskForm";
import { formatDate } from "../utils/dateformatter";
import { useNoteDeleteMutation } from "../queries/useNoteDeleteMutation";
import { Loading } from "../components/Loading";

export const NoteProfile = () => {
  const { noteId } = useParams();
  const nav = useNavigate();
  const { mutateAsync } = useNoteDeleteMutation();
  const { data: note } = useNoteQuery(noteId!);

  if (!noteId) {
    return <Loading />;
  }

  const handleDelete = () => {
    mutateAsync(noteId!);
    nav("/");
  };

  return (
    <>
      <div>NoteProfile</div>
      <h1>{note?.title}</h1>
      <button onClick={handleDelete}>Delete</button>
      <p>{note?.description}</p>
      <span>{formatDate(note?.date!)}</span>
      {note?.tasks?.map((task) => (
        <div key={task._id}>
          <p>{task?.titleTask}</p>
          <p>{task?.descriptionTask}</p>
        </div>
      ))}
      <AddTaskForm noteId={note?._id!} />
    </>
  );
};
