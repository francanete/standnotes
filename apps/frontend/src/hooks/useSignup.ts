import { useState } from "react";
import { IUser } from "../types/user";
import { BASE_URL } from "../env";

export const useSignup = () => {
  const [isError, setError] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

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
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  return { signup, isError, isLoading, isSuccess };
};
