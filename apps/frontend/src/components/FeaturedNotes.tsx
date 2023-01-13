import { useNotesQuery } from "../queries/useNotesQuery";
import { TodayNoteCard } from "./TodayNoteCard";
import { getPreviousNote } from "../utils/notes";

import styles from "./FeaturedNotes.module.scss";

export const FeaturedNotes = () => {
  const { data: notes } = useNotesQuery({ pageParam: undefined });

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
    </div>
  );
};
