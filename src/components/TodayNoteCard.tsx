import { useNotesQuery } from "../queries/useNotesQuery";
import moment from "moment";
import { Loading } from "./Loading";
import { NoteCard as TodayCard } from "./NoteCard";
import classNames from "classnames";

import styles from "./TodayNoteCard.module.scss";
import { EmptyNote } from "./EmptyNote";
import { Heading } from "./Heading";

export const TodayNoteCard = () => {
  const { data: notes, isLoading } = useNotesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!notes || notes.length === 0) {
    return <div>No notes found, enter your first StandNote.</div>;
  }

  const getTodayNote = () => {
    const targetNote = notes?.filter((note) =>
      moment().isSame(note.date, "day")
    );
    return targetNote?.[0];
  };

  const todayNote = getTodayNote();

  return (
    <div className={classNames(styles["TodayNoteCard"])}>
      {todayNote ? (
        <TodayCard
          note={todayNote}
          className={styles["TodayNoteCard__today"]}
        />
      ) : (
        <EmptyNote />
      )}
    </div>
  );
};
