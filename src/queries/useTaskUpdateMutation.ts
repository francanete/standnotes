import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { INotes } from "../types/notes";

export const useTaskUpdateMutation = (taskId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    (note: Partial<INotes>) => {
      return axios.patch(
        `http://localhost:4000/api/notes/tasks/${taskId}`,
        note
      );
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["note-detail", data.data._id]);
      },
    }
  );
};
