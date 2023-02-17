import { IUser } from "../types/user";
import { useLogin } from "../hooks/useLogin";
import { AuthForm } from "../components/forms/AuthForm";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useActivation } from "../hooks/useActivation";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export const Activation = () => {
  const { login, error, isLoading } = useLogin();
  const { activationToken } = useParams();
  const nav = useNavigate();

  const {
    activate,
    isSuccess,
    errorMessage,
    isError,
    isLoading: confirmationIsLoading,
  } = useActivation(activationToken);

  useEffect(() => {
    activate().then((data) => {});
  }, []);

  const onSubmit = async (values: IUser) => {
    await login(values);
  };

  if (isSuccess) {
    nav("/login");
  }

  return (
    <>
      {isError ? (
        <span>
          <h1>Error!</h1>
          <p>Something went wrong.</p>
          <p>{errorMessage}</p>
        </span>
      ) : (
        <span>
          <h1>Success!</h1>
          <p>You can now log in.</p>
        </span>
      )}
    </>
  );
};
