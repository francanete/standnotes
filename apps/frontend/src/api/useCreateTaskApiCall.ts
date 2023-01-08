import axios from "axios";
import { BASE_URL } from "../env";
import { INotes, Tasks } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useCreateTaskApiCall = (noteId: string, note: Partial<INotes>) => {
  const config = getToken();
  return axios.post(`${BASE_URL}/api/notes/tasks/${noteId}`, note, config);
};
