import { IUser } from "../types/user";
import { useLogin } from "../hooks/useLogin";
import { AuthForm } from "../components/forms/AuthForm";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useActivation } from "../hooks/useActivation";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export const Activation = () => {
  const { login, error, isLoading } = useLogin();
  const { activationToken } = useParams();

  const verifyToken = useActivation(activationToken);

  useEffect(() => {
    verifyToken().then((data) => {
      console.log(data);
    });
  });

  const onSubmit = async (values: IUser) => {
    await login(values);
  };

  return (
    <AuthForm
      header="Log in to continue"
      action="Log in"
      onSubmit={onSubmit}
      isLoading={isLoading}
      error={error}
      validationSchema={validationSchema}
    />
  );
};
