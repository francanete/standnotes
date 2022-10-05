import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import { INotes, Tasks } from "../../types/notes";

import styles from "./TaskForm.module.scss";
import { FieldInput } from "../FieldInput";
import { Label } from "../Label";
import { TextEditor } from "../TextEditor";

export const initialValuesSchema = {
  tasks: [
    {
      titleTask: "",
      descriptionTask: "",
    },
  ],
};

const validationSchema = Yup.object({});

const TaskFields = ({
  errors,
  isSubmitting,
  initialValues,
}: FormikProps<Partial<INotes>>) => {
  return (
    <Form>
      <div className={styles["TaskForm"]}>
        <div>
          <label htmlFor="titleTask">Add a task</label>
          <FieldArray name="tasks">
            {(fieldArrayProps) => {
              const { form } = fieldArrayProps;
              const { values } = form;
              const { tasks } = values;

              return (
                <div>
                  <button type="submit">Create Task</button>
                  {tasks.map((_task: Tasks[], index: number) => (
                    <div key={index}>
                      {/* <Field
                        id={`tasks[${index}].titleTask`}
                        name={`tasks[${index}].titleTask`}
                        type="text"
                        values={""}
                        placeholder="Enter a title"
                      />
                      <ErrorMessage name={`tasks[${index}].titleTask`} /> */}

                      <FieldInput
                        label="Task title"
                        name={`tasks[${index}].titleTask`}
                      />

                      <Label htmlFor="description">Description</Label>
                      <TextEditor
                        value={values.tasks[index].descriptionTask}
                        // setFieldValue={(val) =>
                        //  setFieldValue("description", val)
                        // }
                        setFieldValue={(val) =>
                          form.setFieldValue(
                            `tasks[${index}].descriptionTask`,
                            val
                          )
                        }
                      />

                      {/* <Field
                        id={`tasks[${index}].descriptionTask`}
                        name={`tasks[${index}].descriptionTask`}
                        type="text"
                        as="textarea"
                        values={""}
                        placeholder="Enter a description"
                      />
                      <ErrorMessage name={`tasks[${index}].descriptionTask`} /> */}
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
      </div>
    </Form>
  );
};

export const TaskForm = ({
  onSubmit,
  initialValues,
}: {
  onSubmit: (values: Partial<INotes>) => void;
  initialValues: typeof initialValuesSchema;
  validationSchema: typeof validationSchema;
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {TaskFields}
      </Formik>
    </>
  );
};
