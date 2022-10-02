import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useNoteCreateMutation } from "../../queries/useNoteCreateMutation";
import { INotes } from "../../types/notes";
import { FieldInput } from "../FieldInput";
import { Button } from "../Button";

import styles from "./CreateNoteForm.module.scss";

const initialValues = {
  title: "",
  description: "",
  date: "",
  // tasks: [
  //   {
  //     titleTask: "",
  //     descriptionTask: "",
  //   },
  // ],
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
  description: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  // tasks: Yup.array().of(
  //   Yup.object().shape({
  //     titleTask: Yup.string().required("Required"),
  //     descriptionTask: Yup.string().required("Required"),
  //   })
  // ),
});

export const CreateNoteForm = () => {
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
              <div className={styles["CreateNoteForm"]}>
                <FieldInput
                  name="title"
                  label="Title"
                  id="title"
                  type="text"
                  placeholder="Enter a title"
                />
                <FieldInput
                  name="description"
                  label="Description"
                  id="description"
                  type="text"
                  as="textarea"
                  placeholder="Enter a description"
                />

                <FieldInput
                  name="date"
                  label="Date"
                  id="date"
                  type="date"
                  placeholder="Enter a date"
                />

                <Button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Create StandNote
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
