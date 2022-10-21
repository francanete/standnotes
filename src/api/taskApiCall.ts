import axios from "axios";
import { BASE_URL } from "../env";
import { Tasks } from "../types/notes";
import { getToken } from "../utils/getToken";

export const taskApiCall = async (taskId: string) => {
  const config = getToken();
  const { data } = await axios.get<Tasks>(
    `${BASE_URL}/api/notes/tasks/${taskId}`,
    config
  );
  return data;
};
