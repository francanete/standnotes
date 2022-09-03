import axios from "axios";
import { INotes } from "../types/notes";

export const useCreateNoteApiCall = (note: INotes) => {
  return axios.post("http://localhost:4000/api/notes", note);
};
