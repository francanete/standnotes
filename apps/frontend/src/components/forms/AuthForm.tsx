import { Form, Formik } from "formik";
import { FieldInput } from "../FieldInput";

import styles from "./AuthForm.module.scss";
import { Button } from "../Button";
import { ClipLoader } from "react-spinners";
import { Heading } from "../Heading";
import { useState } from "react";

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
  const [theme, setTheme] = useState("");

  const handleThemeSpinner = () => {
    const getTheme = localStorage.getItem("theme");

    if (getTheme === "dark") {
      setTheme("black");
    } else if (getTheme === "light") {
      setTheme("white");
    }
  };

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
          <Button
            disabled={isLoading ? isLoading : undefined}
            type="submit"
            onClick={() => handleThemeSpinner()}
          >
            <ClipLoader loading={isLoading} color={theme} size={12} />
            {action}
          </Button>
          {error && <p>{error}</p>}
        </Form>
      </Formik>
    </div>
  );
};
