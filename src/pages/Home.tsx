import { useNotesQuery } from "../queries/useNotesQuery";
import { Loading } from "../components/Loading";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateformatter";

import { Badge } from "../components/Badge";
import styles from "./Home.module.scss";
import { Heading } from "../components/Heading";

export const Home = () => {
  const { data: notes, isLoading } = useNotesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!notes || notes.length === 0) {
    return <div>No notes found, enter your first StandNote.</div>;
  }

  return (
    <div>
      <h1>StandNotes</h1>
      <div className={styles["Home"]}>
        {notes.map((note) => (
          <Link to={`/note/${note._id}`}>
            <div key={note._id} className={styles["Home__card"]}>
              <Badge
                className={styles["Home__badge"]}
                content={
                  note.tasks?.length === 1
                    ? `${note.tasks?.length} task`
                    : `${note.tasks?.length} tasks`
                }
              />
              <Heading level={2}>{note.title}</Heading>
              <span>{formatDate(note.date)}</span>
              <p>{note.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
