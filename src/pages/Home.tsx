import { useNotesQuery } from "../queries/useNotesQuery";
import { Loading } from "../components/Loading";
import { Link } from "react-router-dom";
import { NoteCreate } from "./ NoteCreate";
import { formatDate } from "../utils/dateformatter";

export const Home = () => {
  const { data: notes, isLoading } = useNotesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!notes) {
    return null;
  }

  return (
    <div>
      <h1>StandNotes</h1>
      {notes.map((note) => (
        <div key={note._id}>
          <Link to={`/note/${note._id}`}>
            <h2>{note.title}</h2>
            <p>{formatDate(note.date)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
