import { useQuery } from "react-query";
import { fetchAllNotesApiCall } from "../api/useAllNotesApiCall";
import { INotes } from "../types/notes";

export const useNotesQuery = () => {
  return useQuery<INotes[], Error>("all-notes", fetchAllNotesApiCall);
};
