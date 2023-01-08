import axios from "axios";
import { BASE_URL } from "../env";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const noteApiCall = async (noteId: string) => {
  const config = getToken();

  const { data } = await axios.get<INotes>(
    `${BASE_URL}/api/notes/${noteId}`,
    config
  );
  return data;
};
