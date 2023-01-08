import axios from "axios";
import { BASE_URL } from "../env";
import { getToken } from "../utils/getToken";

export const useDeleteTaskApiCall = async (taskId: string) => {
  const config = getToken();
  return await axios.delete(`${BASE_URL}/api/notes/tasks/${taskId}`, config);
};
