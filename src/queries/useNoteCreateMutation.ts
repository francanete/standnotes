import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useCreateNoteApiCall } from "../api/useCreateNoteApiCall";

export const useNoteCreateMutation = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(useCreateNoteApiCall, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("all-notes");
      // nav(`/note/${data.data._id}`);
      // return data.data._id;
    },
  });
};
