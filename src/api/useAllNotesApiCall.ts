import axios from "axios";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const fetchAllNotesApiCall = async (): Promise<INotes[]> => {
  const config = getToken();

  const { data } = await axios.get("http://localhost:4000/api/notes", config);
  return data;
};
