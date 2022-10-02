import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateformatter";
import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { INotes } from "../types/notes";

import styles from "./NoteCard.module.scss";

interface INoteCard {
  note: INotes;
}

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
        <Paragraph>{note.description}</Paragraph>
      </div>
    </Link>
  );
};
