import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useTaskUpdateMutation = (taskId: string) => {
  const queryClient = useQueryClient();
  const config = getToken();
  return useMutation(
    (note: Partial<INotes>) => {
      return axios.patch(
        `http://localhost:4000/api/notes/tasks/${taskId}`,
        note,
        config
      );
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["note-detail", data.data._id]);
      },
    }
  );
};
