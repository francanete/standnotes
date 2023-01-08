import { useQuery } from "react-query";
import { noteApiCall } from "../api/noteApiCall";
import { INotes } from "../types/notes";

export const useNoteQuery = (noteId: string) => {
  return useQuery<INotes, Error>(["note-detail", noteId], () =>
    noteApiCall(noteId)
  );
};
