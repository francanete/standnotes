import { useTaskCreateMutation } from "../../queries/useTaskCreateMutation";
import { INotes } from "../../types/notes";
import { initialValuesSchema, TaskForm } from "./TaskForm";
import { Loading } from "../Loading";

interface ICreateTaskForm {
  noteId: string;
  setOpen: (open: boolean) => void;
}

export const CreateTaskForm = ({ noteId, setOpen }: ICreateTaskForm) => {
  const { mutateAsync, isLoading } = useTaskCreateMutation(noteId!);
  const onSubmit = async (values: Partial<INotes>) => {
    await mutateAsync(values);
    setOpen(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return <TaskForm onSubmit={onSubmit} initialValues={initialValuesSchema} />;
};
