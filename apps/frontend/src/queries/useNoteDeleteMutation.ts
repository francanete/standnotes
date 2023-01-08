import { useMutation, useQueryClient } from "react-query";
import { useDeleteNoteApiCall } from "../api/useDeleteNoteApiCall";

export const useNoteDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(useDeleteNoteApiCall, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("all-notes");
    },
  });
};
