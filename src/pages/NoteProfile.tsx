import { useNavigate, useParams } from "react-router-dom";
import { useNoteQuery } from "../queries/useNoteQuery";
import { CreateTaskForm } from "../components/forms/CreateTaskForm";
import { formatDate } from "../utils/dateformatter";
import { useNoteDeleteMutation } from "../queries/useNoteDeleteMutation";
import { Loading } from "../components/Loading";
import { TasksList } from "../components/TasksList";
import DOMPurify from "dompurify";
import { ConfirmationModal } from "../components/ConfirmationModal";
import { useState } from "react";
import { ActionButtons } from "../components/ActionButtons";

import styles from "./NoteProfile.module.scss";
import { Heading } from "../components/Heading";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";

export const NoteProfile = () => {
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { noteId } = useParams();
  const { data: note } = useNoteQuery(noteId!);
  const nav = useNavigate();
  const { mutateAsync } = useNoteDeleteMutation();

  if (!note || !noteId) {
    return <Loading />;
  }

  const handleDeleteNote = () => {
    noteId && mutateAsync(noteId);
    nav("/");
  };

  const createMarkup = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      <div className={styles["NoteProfile"]}>
        <div className={styles["NoteProfile__header"]}>
          <ActionButtons
            onDelete={() => setIsOpenConfirmation(true)}
            onEdit={() => console.log("edit")}
          />
          <h1>{note.title}</h1>
          <p>{formatDate(note.date)}</p>
        </div>

        <div
          className={styles["NoteProfile__description"]}
          dangerouslySetInnerHTML={createMarkup(note.description)}
        />
        <Heading level={3}>What are you doing today?</Heading>
        <Button onClick={() => setIsOpen(true)}>Create Task</Button>
        {note.tasks?.length === 0 ? (
          <p>No tasks</p>
        ) : (
          <TasksList note={note} key={note._id} />
        )}
      </div>
      <ConfirmationModal
        title="Delete Note"
        isOpen={isOpenConfirmation}
        onClose={() => setIsOpenConfirmation(false)}
        setOpen={setIsOpenConfirmation}
        onConfirm={handleDeleteNote}
      />
      <CreateTaskModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setOpen={setIsOpen}
        noteId={noteId}
        title="Create Task"
      />
    </>
  );
};

const CreateTaskModal = ({
  title,
  onClose,
  isOpen,
  noteId,
  setOpen,
}: {
  title: string;
  onClose: () => void;
  isOpen: boolean;
  noteId: string;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <CreateTaskForm noteId={noteId} setOpen={setOpen} />
    </Modal>
  );
};
