import { Link } from "react-router-dom";
import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { INotes } from "../types/notes";
import classNames from "classnames";
import { Paragraph } from "./Paragraph";
import { getDayAndNumber } from "../utils/date";
import { CreateMarkup } from "./CreateMarkup";

import styles from "./NoteCard.module.scss";

interface INoteCard {
  note: INotes;
  className?: string;
  descriptionStyles?: string;
}

export const NoteCard = ({ note, className }: INoteCard) => {
  return (
    <Link to={`/note/${note._id}`} key={note._id}>
      <div className={classNames(styles["NoteCard"], className)}>
        <Badge
          className={styles["NoteCard__badge"]}
          content={
            note.tasks?.length === 1
              ? `${note.tasks?.length} task`
              : `${note.tasks?.length} tasks`
          }
        />
        <Heading ellipsis level={2}>
          {note.title}
        </Heading>
        <Paragraph bold>{getDayAndNumber(note.date)}</Paragraph>
        <CreateMarkup
          content={note.description}
          className={styles["NoteCard__description"]}
        />
      </div>
    </Link>
  );
};
