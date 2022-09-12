import { useQuery } from "react-query";
import { taskApiCall } from "../api/taskApiCall";
import { Tasks } from "../types/notes";

export const useTaskQuery = (taskId: string) => {
  return useQuery<Tasks, Error>(
    ["task-detail", taskId],
    () => taskApiCall(taskId),
    {
      enabled: false,
    }
  );
};
