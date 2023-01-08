import { useTaskUpdateMutation } from "../../queries/useTaskUpdateMutation";
import { INotes } from "../../types/notes";
import { TaskForm } from "./TaskForm";
import { useTaskQuery } from "../../queries/useTaskQuery";
import { Loading } from "../Loading";

export const UpdateTaskForm = ({
  taskId,
  setOpen,
}: {
  taskId: string;
  setOpen: (open: boolean) => void;
}) => {
  const { mutateAsync } = useTaskUpdateMutation(taskId);
  const { data: task } = useTaskQuery(taskId);

  if (!task) return <Loading />;

  const currentValues = {
    tasks: [
      {
        titleTask: task.titleTask,
        descriptionTask: task.descriptionTask,
      },
    ],
  };

  const onSubmit = async (values: Partial<INotes>) => {
    await mutateAsync(values);
    setOpen(false);
  };
  return <TaskForm onSubmit={onSubmit} initialValues={currentValues} />;
};
