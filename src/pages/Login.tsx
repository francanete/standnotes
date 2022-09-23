import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { IUser } from "../types/user";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = async (values: IUser) => {
  console.log(values.email, values.password);
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
