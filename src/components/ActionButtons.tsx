import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

import styles from "./ActionButtons.module.scss";

interface IActionButtons {
  onDelete: () => void;
  onEdit: () => void;
  alignRight?: boolean;
}

export const ActionButtons = ({
  onDelete,
  onEdit,
  alignRight,
}: IActionButtons) => {
  return (
    <div className={styles["ActionButtons"]}>
      <button className={styles["ActionButtons__button"]} onClick={onDelete}>
        <RiDeleteBin6Line size={18} color="#ff7b73" />
      </button>
      <button className={styles["ActionButtons__button"]} onClick={onEdit}>
        <BiEditAlt size={18} color="#383838aa" />
      </button>
    </div>
  );
};
