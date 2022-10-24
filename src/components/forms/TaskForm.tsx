import { FieldArray, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { INotes, Tasks } from "../../types/notes";
import { FieldInput } from "../FieldInput";
import { Label } from "../Label";
import { TextEditor } from "../TextEditor";
import { Button } from "../Button";

import styles from "./TaskForm.module.scss";

export const initialValuesSchema = {
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

const TaskFields = ({ isValid, dirty }: FormikProps<Partial<INotes>>) => {
  return (
    <Form>
      <div className={styles["TaskForm"]}>
        <div>
          <FieldArray name="tasks">
            {(fieldArrayProps) => {
              const { form } = fieldArrayProps;
              const { values } = form;
              const { tasks } = values;

              return (
                <div>
                  <Button disabled={!isValid || !dirty} type="submit">
                    Save Task
                  </Button>
                  {tasks.map((_task: Tasks[], index: number) => (
                    <div key={index}>
                      <FieldInput
                        label="Task title"
                        name={`tasks[${index}].titleTask`}
                        autoFocus
                      />
                      <Label htmlFor="descriptionTask">Description</Label>
                      <TextEditor
                        value={values.tasks[index].descriptionTask}
                        setFieldValue={(val) =>
                          form.setFieldValue(
                            `tasks[${index}].descriptionTask`,
                            val
                          )
                        }
                      />
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
