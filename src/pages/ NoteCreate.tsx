import React, { useState } from "react";
import { useNoteCreateMutation } from "../queries/useNoteCreateMutation";
import { INotes } from "../types/notes";
import { useFormik } from "formik";

const initialValues = {
  title: "",
  description: "",
  date: "",
};

const onSubmit = (values: INotes) => {
  console.log("Form submitted", values);
};

const validate = (values: INotes) => {
  const errors: Partial<INotes> = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length < 5) {
    errors.title = "Must be 5 characters or more";
  }

  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.date) {
    errors.date = "Required";
  }
  return errors;
};

export const NoteCreate = () => {
  const formik = useFormik<INotes>({
    initialValues,
    onSubmit,
    validate,
  });

  const { mutateAsync } = useNoteCreateMutation();

  const handleNoteCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // mutateAsync(formik.values);
    console.log(formik.values);
  };

  console.log(formik.errors);

  return (
    <>
      <div>Enter a new StandNote</div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors.title ? <div>{formik.errors.title}</div> : null}
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          {formik.errors.date ? <div>{formik.errors.date}</div> : null}
          <button type="submit">Create StandNote</button>
          {/* <button type="submit" onClick={handleNoteCreate}>
            Create StandNote
          </button> */}
        </form>
      </div>
    </>
  );
};
