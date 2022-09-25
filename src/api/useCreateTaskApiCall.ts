import axios from "axios";
import { INotes, Tasks } from "../types/notes";
import { getToken } from "../utils/getToken";

export const useCreateTaskApiCall = (noteId: string, note: Partial<INotes>) => {
  const config = getToken();
  return axios.post(
    `http://localhost:4000/api/notes/tasks/${noteId}`,
    note,
    config
  );
};
