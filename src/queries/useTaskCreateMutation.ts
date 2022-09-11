import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { INotes } from "../types/notes";

export const useTaskCreateMutation = (noteId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    (note: Partial<INotes>) => {
      return axios.post(
        `http://localhost:4000/api/notes/tasks/${noteId}`,
        note
      );
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["note-detail", noteId]);
      },
    }
  );
};
