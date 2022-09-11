import axios from "axios";

export const useDeleteNoteApiCall = async (noteId: string) => {
  return await axios.delete(`http://localhost:4000/api/notes/${noteId}`);
};
