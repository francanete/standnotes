import { useNotesQuery } from "../queries/useNotesQuery";
import { formatDate } from "../utils/date";
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

  const today = new Date();

  return (
    <div className={styles["NotesGrid"]}>
      {notes.map((note) => {
        return (
          <>
            {formatDate(note.date) !== formatDate(today.toDateString()) ? (
              <NoteCard key={note._id} note={note} />
            ) : null}
          </>
        );
      })}
    </div>
  );
};
