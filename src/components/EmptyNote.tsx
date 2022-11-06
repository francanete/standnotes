import { Link } from "react-router-dom";
import { Heading } from "./Heading";
import classNames from "classnames";
import { FaPlus } from "react-icons/fa";

import styles from "./EmptyNote.module.scss";

interface INoteCard {
  className?: string;
}

export const EmptyNote = ({ className }: INoteCard) => {
  return (
    <Link to={`/note/create`}>
      <div className={classNames(styles["EmptyNote"], className)}>
        <FaPlus size={50} />
        <Heading level={2}>Add today's note</Heading>
      </div>
    </Link>
  );
};
