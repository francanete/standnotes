import { useNoteCreateMutation } from "../queries/useNoteCreateMutation";
import { INotes, Tasks } from "../types/notes";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

import style from "./NoteCreate.module.scss";
import { useNavigate } from "react-router-dom";

const initialValues = {
  title: "",
  description: "",
  date: "",
  tasks: [
    {
      titleTask: "",
      descriptionTask: "",
    },
  ],
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
  description: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  tasks: Yup.array().of(
    Yup.object().shape({
      titleTask: Yup.string().required("Required"),
      descriptionTask: Yup.string().required("Required"),
    })
  ),
});

export const NoteCreate = () => {
  const { mutateAsync, isSuccess } = useNoteCreateMutation();
  const nav = useNavigate();

  const onSubmit = async (values: INotes) => {
    const note = await mutateAsync(values);
    nav(`/note/${note.data._id}`);
  };

  return (
    <>
      <div>Enter a new StandNote</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form>
              <div className={style["NoteCreate"]}>
                <label htmlFor="title">Title</label>
                <Field
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Enter a title"
                />
                <ErrorMessage name="title" />
                <label htmlFor="description">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  type="text"
                />
                <ErrorMessage name="description" />
                <label htmlFor="date">Date</label>
                <Field name="date" id="date" type="date" />
                <ErrorMessage name="date" />

                <div>
                  <label htmlFor="titleTask">Add a task</label>
                  <FieldArray name="tasks">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { tasks } = values;
                      return (
                        <div>
                          {tasks.map((_task: Tasks[], index: number) => (
                            <div key={index}>
                              <Field
                                id={`tasks[${index}].titleTask`}
                                name={`tasks[${index}].titleTask`}
                                type="text"
                                values={""}
                              />
                              <Field
                                id={`tasks[${index}].descriptionTask`}
                                name={`tasks[${index}].descriptionTask`}
                                type="text"
                                values={""}
                              />
                              {index > 0 && (
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}
                              <button type="button" onClick={() => push("")}>
                                +
                              </button>
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>

                <button type="submit" disabled={!formik.isValid}>
                  Create StandNote
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
