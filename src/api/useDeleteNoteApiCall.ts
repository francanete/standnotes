import axios from "axios";
import { getToken } from "../utils/getToken";

export const useDeleteNoteApiCall = async (noteId: string) => {
  const config = getToken();
  return await axios.delete(
    `http://localhost:4000/api/notes/${noteId}`,
    config
  );
};
