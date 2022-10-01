import classNames from "classnames";
import styles from "./Badge.module.scss";

interface IBadge {
  content: string;
  className?: string;
}

export const Badge = ({ content, className }: IBadge) => {
  return (
    <div className={classNames(styles["Badge"], className)}>
      <span>{content}</span>
    </div>
  );
};
