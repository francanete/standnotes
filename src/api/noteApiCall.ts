import axios from "axios";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const noteApiCall = async (noteId: string) => {
  const config = getToken();

  const { data } = await axios.get<INotes>(
    `http://localhost:4000/api/notes/${noteId}`,
    config
  );
  return data;
};
