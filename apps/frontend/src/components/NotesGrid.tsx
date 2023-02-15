import moment from "moment";
import { useNotesQuery } from "../queries/useNotesQuery";
import { Loading } from "./Loading";
import { NoteCard } from "./NoteCard";

import styles from "./NotesGrid.module.scss";
import { useState } from "react";
import { Button } from "./Button";

export const NotesGrid = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { data: notes, isLoading } = useNotesQuery({ pageParam: pageNumber });

  if (isLoading) {
    return <Loading />;
  }

  if (!notes || notes.length === 0) {
    return <div>No notes found, enter your first StandNote</div>;
  }
  const isLastPage = notes.length / 5 < pageNumber;

  const today = new Date();

  const notesExcludingToday = notes.filter((note) => {
    return !moment(note.date).isSame(today, "day");
  });

  return (
    <div className={styles["NotesGrid"]}>
      <div className={styles["NotesGrid__buttons"]}>
        {pageNumber !== 0 ? (
          <Button
            disabled={pageNumber === 0}
            onClick={() => setPageNumber((page) => page - 1)}
            className={styles["NotesGrid__buttonBack"]}
          >
            Back
          </Button>
        ) : null}
        {!isLastPage ? (
          <Button
            disabled={isLastPage}
            onClick={() => setPageNumber((page) => page + 1)}
            className={styles["NotesGrid__buttonNext"]}
          >
            Next
          </Button>
        ) : null}
      </div>
      {notesExcludingToday.map((note) => {
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
