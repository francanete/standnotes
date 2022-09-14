import { useTaskCreateMutation } from "../../queries/useTaskCreateMutation";
import { INotes } from "../../types/notes";
import { initialValuesSchema, TaskForm } from "./TaskForm";
import * as Yup from "yup";

const validationSchema = Yup.object({
  tasks: Yup.array().of(
    Yup.object().shape({
      titleTask: Yup.string().required("Required"),
      descriptionTask: Yup.string().required("Required"),
    })
  ),
});

export const CreateTaskForm = ({ noteId }: { noteId: string }) => {
  const { mutateAsync } = useTaskCreateMutation(noteId!);
  const onSubmit = async (values: Partial<INotes>) => {
    await mutateAsync(values);
  };
  return (
    <TaskForm
      onSubmit={onSubmit}
      initialValues={initialValuesSchema}
      validationSchema={validationSchema}
    />
  );
};
