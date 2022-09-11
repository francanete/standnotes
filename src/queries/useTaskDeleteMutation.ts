import { useMutation, useQueryClient } from "react-query";
import { useDeleteTaskApiCall } from "../api/useDeleteTaskApiCall";

export const useTaskDeleteMutation = (noteId: string) => {
  const queryClient = useQueryClient();
  return useMutation(useDeleteTaskApiCall, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["note-detail", noteId]);
    },
  });
};
