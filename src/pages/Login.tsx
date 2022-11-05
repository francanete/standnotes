import { IUser } from "../types/user";
import { useLogin } from "../hooks/useLogin";
import { AuthForm } from "../components/forms/AuthForm";

export const Login = () => {
  const { login, error, isLoading } = useLogin();

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
    />
  );
};
