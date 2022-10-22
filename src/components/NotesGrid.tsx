import { useNotesQuery } from "../queries/useNotesQuery";
import { Loading } from "./Loading";
import { NoteCard } from "./NoteCard";

import styles from "./NotesGrid.module.scss";

export const NotesGrid = () => {
  const { data: notes, isLoading } = useNotesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!notes || notes.length === 0) {
    return <div>No notes found, enter your first StandNote.</div>;
  }

  return (
    <div className={styles["NotesGrid"]}>
      Hola Dev
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};
