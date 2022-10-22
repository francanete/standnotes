import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateformatter";
import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { INotes } from "../types/notes";

import styles from "./NoteCard.module.scss";
import DOMPurify from "dompurify";

interface INoteCard {
  note: INotes;
}

const createMarkup = (html: string) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

export const NoteCard = ({ note }: INoteCard) => {
  return (
    <Link to={`/note/${note._id}`} key={note._id}>
      <div className={styles["NoteCard"]}>
        <Badge
          className={styles["NoteCard__badge"]}
          content={
            note.tasks?.length === 1
              ? `${note.tasks?.length} task`
              : `${note.tasks?.length} tasks`
          }
        />
        <Heading level={2}>{note.title}</Heading>
        <span>{formatDate(note.date)}</span>
        <div
          className={styles["NoteCard__description"]}
          dangerouslySetInnerHTML={createMarkup(note.description)}
        />
      </div>
    </Link>
  );
};
