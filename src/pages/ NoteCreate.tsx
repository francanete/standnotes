import React, { useState } from "react";
import { useNoteCreateMutation } from "../queries/useNoteCreateMutation";
import { INotes } from "../types/notes";
import { useFormik } from "formik";

export const NoteCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  // const formik = useFormik({
  //   initialValues: { title: "", description: "", date: "" },
  // });

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
        <form>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit" onClick={handleNoteCreate}>
            Create StandNote
          </button>
        </form>
      </div>
    </>
  );
};
