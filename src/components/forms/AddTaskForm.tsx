import { useTaskCreateMutation } from "../../queries/useTaskCreateMutation";
import { INotes } from "../../types/notes";
import { initialValuesSchema, TaskForm } from "./TaskForm";

export const AddTaskForm = ({ noteId }: { noteId: string }) => {
  const { mutateAsync } = useTaskCreateMutation(noteId!);
  const onSubmit = async (values: Partial<INotes>) => {
    await mutateAsync(values);
  };
  return <TaskForm onSubmit={onSubmit} initialValues={initialValuesSchema} />;
};
