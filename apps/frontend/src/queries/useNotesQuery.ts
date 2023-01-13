import { useQuery } from "react-query";
import { fetchAllNotesApiCall } from "../api/useAllNotesApiCall";
import { INotes } from "../types/notes";

interface IUseNotesQuery {
  pageParam: number | undefined;
}

export const useNotesQuery = ({ pageParam }: IUseNotesQuery) => {
  return useQuery<INotes[], Error>(
    ["notes", pageParam],
    () => fetchAllNotesApiCall({ pageParam }),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60 * 5,
    }
  );
};
