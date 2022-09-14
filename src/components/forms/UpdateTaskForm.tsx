import { useTaskUpdateMutation } from "../../queries/useTaskUpdateMutation";
import { INotes } from "../../types/notes";
import { initialValuesSchema, TaskForm } from "./TaskForm";
import * as Yup from "yup";
import { useTaskQuery } from "../../queries/useTaskQuery";

const validationSchema = Yup.object({
  tasks: Yup.array().of(
    Yup.object().shape({
      titleTask: Yup.string(),
      descriptionTask: Yup.string(),
    })
  ),
});

export const UpdateTaskForm = ({
  taskId,
  setOpen,
}: {
  taskId: string;
  setOpen: (open: boolean) => void;
}) => {
  const { mutateAsync } = useTaskUpdateMutation(taskId!);
  const { data: task } = useTaskQuery(taskId!);

  const currentValues = {
    tasks: [
      {
        titleTask: task?.titleTask!,
        descriptionTask: task?.descriptionTask!,
      },
    ],
  };

  const onSubmit = async (values: Partial<INotes>) => {
    await mutateAsync(values);
    setOpen(false);
  };
  return (
    <TaskForm
      onSubmit={onSubmit}
      initialValues={currentValues}
      validationSchema={validationSchema}
    />
  );
};
