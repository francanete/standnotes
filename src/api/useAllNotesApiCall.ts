import axios from "axios";
import { BASE_URL } from "../env";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const fetchAllNotesApiCall = async (): Promise<INotes[]> => {
  const config = getToken();

  const { data } = await axios.get(`${BASE_URL}/api/notes`, config);
  return data;
};
