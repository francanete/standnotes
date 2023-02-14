import { useMutation, useQueryClient } from "react-query";
import { useDeleteTaskApiCall } from "../api/useDeleteTaskApiCall";

export const useTaskDeleteMutation = (noteId: string) => {
  const queryClient = useQueryClient();
  return useMutation(useDeleteTaskApiCall, {
    onSuccess: () => {
      queryClient.invalidateQueries(["note-detail", noteId]).then();
    },
  });
};
