import axios from "axios";
import { INotes } from "../types/notes";

export const noteApiCall = async (noteId: string) => {
  const { data } = await axios.get<INotes>(
    `http://localhost:4000/api/notes/${noteId}`
  );
  return data;
};
