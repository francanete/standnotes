import { useState } from "react";
import { IUser } from "../types/user";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "../env";

export const useSignup = () => {
  const [error, setError] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuthContext();

  const signup = async ({ email, password }: IUser) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/api/user/signup`, {
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

  return { signup, error, isLoading };
};
