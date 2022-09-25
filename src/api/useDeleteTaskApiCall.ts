import axios from "axios";
import { getToken } from "../utils/getToken";

export const useDeleteTaskApiCall = async (taskId: string) => {
  const config = getToken();
  return await axios.delete(
    `http://localhost:4000/api/notes/tasks/${taskId}`,
    config
  );
};
