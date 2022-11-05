import { Form, Formik } from "formik";
import { FieldInput } from "../FieldInput";

import styles from "./AuthForm.module.scss";
import { Button } from "../Button";
import { Loading } from "../Loading";

interface IAuthForm {
  onSubmit: (values: { email: string; password: string }) => void;
  error: boolean | null;
  isLoading: boolean | null;
}

const initialValues = {
  email: "",
  password: "",
};

export const AuthForm = ({ onSubmit, isLoading, error }: IAuthForm) => {
  return (
    <div className={styles["AuthForm"]}>
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
            {isLoading ? <Loading /> : null}
            Login
          </Button>
          {error && <p>{error}</p>}
        </Form>
      </Formik>
    </div>
  );
};
