import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { IUser } from "../types/user";
import { useSignup } from "../hooks/useSignup";

const initialValues = {
  email: "",
  password: "",
};

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const onSubmit = async (values: IUser) => {
    await signup(values);
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
        <button disabled={isLoading as boolean} type="submit">
          Sign Up
        </button>
        {error && <div>{error}</div>}
      </Form>
    </Formik>
  );
};
