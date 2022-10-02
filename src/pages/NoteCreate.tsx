import { CreateNoteForm } from "../components/forms/CreateNoteForm";
import { Heading } from "../components/Heading";

import styles from "./NoteCreate.module.scss";

export const NoteCreate = () => {
  return (
    <div className={styles["NoteCreate"]}>
      <Heading level={1}>Create a new StandNote</Heading>
      <CreateNoteForm />
    </div>
  );
};
