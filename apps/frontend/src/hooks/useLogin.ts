import { useState } from "react";
import { IUser } from "../types/user";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "../env";
import { setUser } from "./util";

export const useLogin = () => {
  const [error, setError] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const login = async ({ email, password }: IUser) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/api/user/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });

    await setUser(response, setError, setIsLoading, dispatch);
  };

  return { login, error, isLoading };
};
