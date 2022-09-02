import axios from "axios";
import { INotes } from "../types/notes";

export const useNoteApiCall = async (noteId: string): Promise<INotes> => {
  const { data } = await axios.get(`http://localhost:4000/api/notes/${noteId}`);
  return data;
};
