import { useNotesQuery } from "../queries/useNotesQuery";
import { NoteCard as YesterdayNoteCard } from "./NoteCard";
import { TodayNoteCard } from "./TodayNoteCard";

import styles from "./FeaturedNotes.module.scss";
import { getPreviousNote } from "../utils/notes";

export const FeaturedNotes = () => {
  const { data: notes } = useNotesQuery();

  if (!notes) {
    return null;
  }

  const yesterdayNote = getPreviousNote({ notes });

  if (!yesterdayNote) {
    return null;
  }

  return (
    <div className={styles["FeaturedNotes"]}>
      <TodayNoteCard />
      <YesterdayNoteCard
        note={yesterdayNote}
        className={styles["FeaturedNotes__yesterday"]}
      />
    </div>
  );
};
