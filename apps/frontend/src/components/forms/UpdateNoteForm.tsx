import { INotes } from "../../types/notes";
import { Loading } from "../Loading";
import { NoteForm } from "./NoteForm";
import { useNoteQuery } from "../../queries/useNoteQuery";
import { useNoteUpdateMutation } from "../../queries/useNoteUpdateMutation";

export const UpdateNoteForm = ({
  noteId,
  setOpen,
}: {
  noteId: string;
  setOpen: (open: boolean) => void;
}) => {
  const { mutateAsync } = useNoteUpdateMutation(noteId);
  const { data: note } = useNoteQuery(noteId);

  if (!note) return <Loading />;

  const currentValues = {
    title: note.title,
    description: note.description,
    date: note.date,
  };

  const onSubmit = async (values: Partial<INotes>) => {
    await mutateAsync(values);
    setOpen(false);
  };
  return <NoteForm onSubmit={onSubmit} initialValues={currentValues} />;
};
