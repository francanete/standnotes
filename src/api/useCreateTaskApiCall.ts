import axios from "axios";
import { INotes, Tasks } from "../types/notes";

export const useCreateTaskApiCall = (noteId: string, note: Partial<INotes>) => {
  return axios.post(`http://localhost:4000/api/notes/tasks/${noteId}`, note);
};
