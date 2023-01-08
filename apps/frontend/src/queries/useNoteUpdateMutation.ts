import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "../env";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useNoteUpdateMutation = (noteId: string) => {
  const queryClient = useQueryClient();
  const config = getToken();
  return useMutation(
    (note: Partial<INotes>) => {
      return axios.patch(`${BASE_URL}/api/notes/${noteId}`, note, config);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["note-detail", data.data._id]);
      },
    }
  );
};
