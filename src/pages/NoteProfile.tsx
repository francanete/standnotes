import { useNavigate, useParams } from "react-router-dom";
import { useNoteQuery } from "../queries/useNoteQuery";
import { AddTaskForm } from "../components/forms/AddTaskForm";
import { formatDate } from "../utils/dateformatter";
import { useNoteDeleteMutation } from "../queries/useNoteDeleteMutation";
import { Loading } from "../components/Loading";
import { TasksList } from "../components/TasksList";

export const NoteProfile = () => {
  const { noteId } = useParams();
  const { data: note } = useNoteQuery(noteId!);
  const nav = useNavigate();
  const { mutateAsync } = useNoteDeleteMutation();

  if (!note || !noteId) {
    return <Loading />;
  }

  const handleDeleteNote = () => {
    noteId && mutateAsync(noteId);
    nav("/");
  };

  return (
    <>
      <div>NoteProfile</div>
      <h1>{note.title}</h1>
      <button onClick={handleDeleteNote}>Delete</button>
      <p>{note.description}</p>
      <span>{formatDate(note.date)}</span>
      {note.tasks?.length === 0 ? <p>No tasks</p> : <TasksList note={note} />}
      <AddTaskForm noteId={noteId} />
    </>
  );
};
