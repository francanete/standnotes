import { useMutation, useQueryClient } from "react-query";
import { useCreateNoteApiCall } from "../api/useCreateNoteApiCall";

export const useNoteCreateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(useCreateNoteApiCall, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("all-notes");
    },
  });
};
