import axios from "axios";
import { Tasks } from "../types/notes";

export const taskApiCall = async (taskId: string) => {
  const { data } = await axios.get<Tasks>(
    `http://localhost:4000/api/notes/tasks/${taskId}`
  );
  return data;
};
