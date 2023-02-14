const mongoose = require("mongoose");

const Schema = mongoose.Schema;

type Tasks = {
  _id?: string;
  titleTask: string;
  descriptionTask: string;
};

export interface INotesSchema {
  title: string;
  date: Date;
  description: string;
  tasks: Tasks[];
  userId: string;
}

const noteSchema: INotesSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    tasks: [
      {
        titleTask: { type: String, required: false },
        descriptionTask: { type: String, required: false },
      },
    ],
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
