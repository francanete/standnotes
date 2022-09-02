import axios from "axios";
import { INotes } from "../types/notes";

export const fetchAllNotesApiCall = async (): Promise<INotes[]> => {
  const { data } = await axios.get("http://localhost:4000/api/notes");
  return data;
};
