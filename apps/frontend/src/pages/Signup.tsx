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
  const { signup, isError, isLoading, isSuccess } = useSignup();

  const onSubmit = async (values: IUser) => {
    await signup(values);
  };

  if (isSuccess) {
    return (
      //   TODO: create a decent success component or/and toast message
      <span>
        <h1>Success!</h1>
        <p>Check your email for a confirmation link.</p>
      </span>
    );
  }

  return (
    <AuthForm
      header="Create an account to get started"
      action="Register"
      onSubmit={onSubmit}
      isLoading={isLoading}
      error={isError}
      isConfirmPassword={true}
      validationSchema={validationSchema}
    />
  );
};
