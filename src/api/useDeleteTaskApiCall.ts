import axios from "axios";

export const useDeleteTaskApiCall = async (taskId: string) => {
  return await axios.delete(`http://localhost:4000/api/notes/tasks/${taskId}`);
};
