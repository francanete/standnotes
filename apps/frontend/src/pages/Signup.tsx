import { IUser } from "../types/user";
import { useSignup } from "../hooks/useSignup";
import { AuthForm } from "../components/forms/AuthForm";

export const Signup = () => {
  const { signup, error, isLoading } = useSignup();

  const onSubmit = async (values: IUser) => {
    await signup(values);
  };

  return (
    <AuthForm
      header="Create an account to get started"
      action="Get started"
      onSubmit={onSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
};
