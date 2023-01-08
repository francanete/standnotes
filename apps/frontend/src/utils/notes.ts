import moment from "moment";
import { INotes } from "../types/notes";

interface IGetPreviousNote {
  notes: INotes[];
}

const today = new Date();

export const getPreviousNote = ({ notes }: IGetPreviousNote) => {
  const hasTodayNote = notes.some((note) => {
    return moment(note.date).isSame(today, "day");
  });

  return hasTodayNote ? notes[1] : notes[0];
};
