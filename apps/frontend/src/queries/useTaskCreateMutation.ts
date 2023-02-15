import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "../env";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useTaskCreateMutation = (noteId: string) => {
  const queryClient = useQueryClient();
  const config = getToken();
  return useMutation(
    (note: Partial<INotes>) => {
      return axios.post(`${BASE_URL}/api/notes/tasks/${noteId}`, note, config);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["note-detail", noteId]).then();
      },
    }
  );
};
