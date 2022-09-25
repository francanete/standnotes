import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { IUser } from "../types/user";
import { useLogin } from "../hooks/useLogin";

const initialValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const { login, error, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (values: IUser) => {
    await login(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <button disabled={isLoading} type="submit">
          Login
        </button>
        {error && <p>{error}</p>}
      </Form>
    </Formik>
  );
};
