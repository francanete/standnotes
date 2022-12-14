import { useState } from "react";
import { IUser } from "../types/user";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "../env";

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

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};
