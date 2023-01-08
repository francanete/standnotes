import { ErrorMessage, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { INotes } from "../../types/notes";
import { FieldInput, TextError } from "../FieldInput";
import { Button } from "../Button";
import { TextEditor } from "../TextEditor";
import { Label } from "../Label";

import styles from "./NoteForm.module.scss";

export const initialValuesSchema = {
  title: "",
  description: "",
  date: "",
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
  description: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
});

const NoteFields = ({
  values,
  setFieldValue,
  isValid,
  isSubmitting,
}: FormikProps<INotes>) => {
  return (
    <Form>
      <div className={styles["NoteForm"]}>
        <FieldInput
          name="title"
          label="Title"
          id="title"
          type="text"
          placeholder="Enter a title"
          autoFocus
        />
        <FieldInput
          name="date"
          label="Date"
          id="date"
          type="date"
          placeholder="Enter a date"
          className={styles["NoteForm__date"]}
        />
        <Label htmlFor="description">Description</Label>
        <TextEditor
          value={values.description || ""}
          setFieldValue={(val) => setFieldValue("description", val)}
        />
        <ErrorMessage component={TextError} name={"description"} />

        <Button
          className={styles["NoteForm__submitButton"]}
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Save Note
        </Button>
      </div>
    </Form>
  );
};

export const NoteForm = ({
  onSubmit,
  initialValues,
}: {
  onSubmit: (values: INotes) => void;
  initialValues: typeof initialValuesSchema;
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {NoteFields}
      </Formik>
    </>
  );
};
