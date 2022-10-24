import { useNotesQuery } from "../queries/useNotesQuery";
import { Loading } from "./Loading";
import { NoteCard } from "./NoteCard";

import styles from "./FeaturedNoteCard.module.scss";
import { formatDate } from "../utils/date";

export const FeaturedNotesGrid = () => {
  const { data: notes, isLoading } = useNotesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!notes || notes.length === 0) {
    return <div>No notes found, enter your first StandNote.</div>;
  }

  const today = new Date();

  return (
    <div className={styles["FeaturedNotesCard"]}>
      {notes.map((note) => {
        return (
          <>
            {formatDate(note.date) === formatDate(today.toDateString()) ? (
              <div>
                <NoteCard
                  key={note._id}
                  note={note}
                  className={styles["FeaturedNotesCard__card"]}
                  descriptionStyles={styles["FeaturedNotesCard__description"]}
                />
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};
