import axios from "axios";
import { BASE_URL } from "../env";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useCreateNoteApiCall = (note: INotes) => {
  const config = getToken();
  return axios.post(`${BASE_URL}/api/notes`, note, config);
};
