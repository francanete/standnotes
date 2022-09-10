// import { useNoteCreateMutation } from "../queries/useNoteCreateMutation";
// import { INotes, Tasks } from "../types/notes";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { useNoteCreateMutation } from "../../queries/useNoteCreateMutation";
import { INotes } from "../../types/notes";

import styles from "./AddTaskForm.module.scss";

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
  tasks: Yup.array()
    .of(
      Yup.object().shape({
        titleTask: Yup.string().required("Required"),
        descriptionTask: Yup.string().required("Required"),
      })
    )
    .required("Required"),
});

export const AddTaskForm = () => {
  const { mutateAsync, isSuccess } = useNoteCreateMutation();
  const nav = useNavigate();

  const onSubmit = async (values: INotes) => {
    const note = await mutateAsync(values);
    nav(`/note/${note.data._id}`);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form>
              <div className={styles["AddTaskForm"]}>
                <label htmlFor="titleTask">Title</label>
                <Field
                  id={`titleTtasks.titleTaskask`}
                  name={`tasks.titleTask`}
                  type="text"
                />
                <ErrorMessage name="tasks.titleTask" />

                <label htmlFor="tasks.descriptionTask">Description</label>
                <Field
                  id={`tasks.descriptionTask`}
                  name={`tasks.descriptionTask`}
                  type="text"
                  as="textarea"
                />
                <ErrorMessage name={`tasks.descriptionTask`} />

                {/* <div>
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
                </div> */}

                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
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
