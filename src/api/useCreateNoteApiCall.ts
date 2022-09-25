import axios from "axios";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useCreateNoteApiCall = (note: INotes) => {
  const config = getToken();
  return axios.post("http://localhost:4000/api/notes", note, config);
};
