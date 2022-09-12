import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { INotes, Tasks } from "../../types/notes";
import { useTaskCreateMutation } from "../../queries/useTaskCreateMutation";

import styles from "./AddTaskForm.module.scss";

const initialValues = {
  tasks: [
    {
      titleTask: "",
      descriptionTask: "",
    },
  ],
};

const validationSchema = Yup.object({
  tasks: Yup.array().of(
    Yup.object().shape({
      titleTask: Yup.string().required("Required"),
      descriptionTask: Yup.string().required("Required"),
    })
  ),
});

export const AddTaskForm = ({
  noteId,
  currentValues,
}: {
  noteId: string;
  currentValues?: Tasks;
}) => {
  const { mutateAsync } = useTaskCreateMutation(noteId);

  const onSubmit = async (values: Partial<INotes>) => {
    const tasks = await mutateAsync(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div className={styles["AddTaskForm"]}>
                <div>
                  <label htmlFor="titleTask">Add a task</label>
                  <FieldArray name="tasks">
                    {(fieldArrayProps) => {
                      const { form } = fieldArrayProps;
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
                                placeholder="Enter a title"
                              />
                              <ErrorMessage
                                name={`tasks[${index}].titleTask`}
                              />

                              <Field
                                id={`tasks[${index}].descriptionTask`}
                                name={`tasks[${index}].descriptionTask`}
                                type="text"
                                as="textarea"
                                values={""}
                                placeholder="Enter a description"
                              />
                              <ErrorMessage
                                name={`tasks[${index}].descriptionTask`}
                              />
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>

                <button type="submit">Create Task</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
