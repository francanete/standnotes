import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useTaskCreateMutation = (noteId: string) => {
  const queryClient = useQueryClient();
  const config = getToken();
  return useMutation(
    (note: Partial<INotes>) => {
      return axios.post(
        `http://localhost:4000/api/notes/tasks/${noteId}`,
        note,
        config
      );
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["note-detail", noteId]);
      },
    }
  );
};
