import moment from "moment";
import { useNotesQuery } from "../queries/useNotesQuery";
import { Loading } from "./Loading";
import { NoteCard } from "./NoteCard";

import styles from "./NotesGrid.module.scss";
import { useState } from "react";

export const NotesGrid = () => {
  const [pageNumber, setPageNamber] = useState(1);
  const { data: notes, isLoading } = useNotesQuery({ pageParam: pageNumber });

  if (isLoading) {
    return <Loading />;
  }

  if (!notes || notes.length === 0) {
    return <div>No notes found, enter your first StandNote.</div>;
  }

  const today = new Date();

  const notesExcludingToday = notes.filter((note) => {
    return !moment(note.date).isSame(today, "day");
  });

  return (
    <div className={styles["NotesGrid"]}>
      {notesExcludingToday.map((note) => {
        return (
          <NoteCard
            key={note._id}
            note={note}
            className={styles.NotesGrid__card}
          />
        );
      })}
      <button onClick={() => setPageNamber((page) => page + 1)}>Prev</button>
      <button onClick={() => setPageNamber((page) => page - 1)}>Next</button>
    </div>
  );
};
