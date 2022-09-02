import axios from "axios";
import { useQuery } from "react-query";
// import { useNoteApiCall } from "../api/useNoteApiCall";
import { INotes } from "../types/notes";

// const useNoteApiCall = async (noteId: string): Promise<INotes> => {
//   const { data } = await axios.get(`http://localhost:4000/api/notes/${noteId}`);
//   return data;

// };

const fetchNoteApiCall = async (noteId: string) => {
  const { data } = await axios.get(`http://localhost:4000/api/notes/${noteId}`);
  return data;
};

export const useNoteQuery = (noteId: string) => {
  // const call = fetchNoteApiCall(noteId);
  // const fetchNote = useNoteApiCall(noteId);
  return useQuery<INotes, Error>(["note-detail", noteId], () =>
    fetchNoteApiCall(noteId)
  );
};
