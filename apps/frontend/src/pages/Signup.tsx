import { IUser } from "../types/user";
import { useSignup } from "../hooks/useSignup";
import { AuthForm } from "../components/forms/AuthForm";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  unconfirmedPassword: Yup.string().min(6, "Too Short!").required("Required"),
  password: Yup.string().oneOf(
    [Yup.ref("unconfirmedPassword"), null],
    "Passwords must match!"
  ),
});

export const Signup = () => {
  const { signup, error, isLoading } = useSignup();

  const onSubmit = async (values: IUser) => {
    await signup(values);
  };

  return (
    <AuthForm
      header="Create an account to get started"
      action="Register"
      onSubmit={onSubmit}
      isLoading={isLoading}
      error={error}
      isConfirmPassword={true}
      validationSchema={validationSchema}
    />
  );
};
