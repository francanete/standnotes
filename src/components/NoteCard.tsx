import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { INotes } from "../types/notes";

import styles from "./NoteCard.module.scss";
import DOMPurify from "dompurify";
import classNames from "classnames";
import { Paragraph } from "./Paragraph";
import { getDayAndNumber } from "../utils/date";

interface INoteCard {
  note: INotes;
  className?: string;
  descriptionStyles?: string;
}

const createMarkup = (html: string) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

export const NoteCard = ({ note, className, descriptionStyles }: INoteCard) => {
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
        <div
          className={classNames(
            styles["NoteCard__description"],
            descriptionStyles
          )}
          dangerouslySetInnerHTML={createMarkup(note.description)}
        />
      </div>
    </Link>
  );
};
