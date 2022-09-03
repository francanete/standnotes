import axios from "axios";

export const noteApiCall = async (noteId: string) => {
  const { data } = await axios.get(`http://localhost:4000/api/notes/${noteId}`);
  return data;
};
