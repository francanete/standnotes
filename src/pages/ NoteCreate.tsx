import React, { useState } from "react";
import { useNoteCreateMutation } from "../queries/useNoteCreateMutation";
import { INotes } from "../types/notes";

export const NoteCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const { mutateAsync } = useNoteCreateMutation();

  const handleNoteCreate = () => {
    const note: INotes = {
      title,
      description,
      date,
    };
    mutateAsync(note);
    console.log(note);
  };

  return (
    <>
      <div>Enter a new StandNote</div>
      <div>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" onClick={handleNoteCreate}>
          Create StandNote
        </button>
      </div>
    </>
  );
};
