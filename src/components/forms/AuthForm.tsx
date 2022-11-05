import { Form, Formik } from "formik";
import { FieldInput } from "../FieldInput";

import styles from "./AuthForm.module.scss";
import { Button } from "../Button";
import { ClipLoader } from "react-spinners";
import { Heading } from "../Heading";

interface IAuthForm {
  onSubmit: (values: { email: string; password: string }) => void;
  error: boolean | null;
  isLoading: boolean;
  header: string;
  action?: string;
}

const initialValues = {
  email: "",
  password: "",
};

export const AuthForm = ({
  onSubmit,
  isLoading,
  error,
  header,
  action = "Submit",
}: IAuthForm) => {
  return (
    <div className={styles["AuthForm"]}>
      <Heading level={2}>{header}</Heading>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles["AuthForm__form"]}>
          <FieldInput
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
          />

          <FieldInput
            label="Password"
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button disabled={isLoading ? isLoading : undefined} type="submit">
            <ClipLoader loading={isLoading} color="white" size={12} />
            {action}
          </Button>
          {error && <p>{error}</p>}
        </Form>
      </Formik>
    </div>
  );
};
