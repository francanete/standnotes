import { INotes } from "../../types/notes";
import { Loading } from "../Loading";
import { useNoteCreateMutation } from "../../queries/useNoteCreateMutation";
import { useNavigate } from "react-router-dom";
import { initialValuesSchema, NoteForm } from "./NoteForm";

export const CreateNoteForm = () => {
  const { mutateAsync, isLoading } = useNoteCreateMutation();
  const nav = useNavigate();

  const onSubmit = async (values: INotes) => {
    const note = await mutateAsync(values);
    nav(`/note/${note.data._id}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return <NoteForm onSubmit={onSubmit} initialValues={initialValuesSchema} />;
};
