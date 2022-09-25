import axios from "axios";
import { Tasks } from "../types/notes";
import { getToken } from "../utils/getToken";

export const taskApiCall = async (taskId: string) => {
  const config = getToken();
  const { data } = await axios.get<Tasks>(
    `http://localhost:4000/api/notes/tasks/${taskId}`,
    config
  );
  return data;
};
