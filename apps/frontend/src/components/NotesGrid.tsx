import moment from "moment";
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

  const today = new Date();

  const hasTodayNote = notes.some((note) => {
    return moment(note.date).isSame(today, "day");
  });

  return (
    <div className={styles["NotesGrid"]}>
      {hasTodayNote
        ? notes.slice(2).map((note) => {
            return (
              <NoteCard
                key={note._id}
                note={note}
                className={styles.NotesGrid__card}
              />
            );
          })
        : notes.slice(1).map((note) => {
            return (
              <NoteCard
                key={note._id}
                note={note}
                className={styles.NotesGrid__card}
              />
            );
          })}
    </div>
  );
};
