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
  isFeaturedNote?: boolean;
}

const createMarkup = (html: string) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

export const NoteCard = ({
  note,
  className,
  descriptionStyles,
  isFeaturedNote = false,
}: INoteCard) => {
  return (
    <Link to={`/note/${note._id}`} key={note._id}>
      <div className={classNames(styles["NoteCard"], className)}>
        {isFeaturedNote ? (
          <Badge
            className={styles["NoteCard__badge"]}
            content={
              note.tasks?.length === 1
                ? `${note.tasks?.length} task`
                : `${note.tasks?.length} tasks`
            }
          />
        ) : null}
        <Heading ellipsis level={isFeaturedNote ? 2 : 3}>
          {note.title}
        </Heading>
        <Paragraph bold={!!isFeaturedNote}>
          {getDayAndNumber(note.date)}
        </Paragraph>
        {isFeaturedNote ? (
          <div
            className={classNames(
              styles["NoteCard__description"],
              descriptionStyles
            )}
            dangerouslySetInnerHTML={createMarkup(note.description)}
          />
        ) : null}
      </div>
    </Link>
  );
};
