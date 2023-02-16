import { useState } from "react";

export function useActivation(activationToken: string | undefined) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return async () => {
    try {
      const response: Response = await fetch(
        //   TODO: update BASE_URL for the server
        `http://localhost:8000/api/user/activate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tokenActivation: activationToken }),
        }
      );

      const json = await response.json();
      const data = {
        isLoading,
        isError,
        isSuccess,
        error: null as string | null,
        successMessage: "",
      };

      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        data.error = `Something went wrong: ${json.error}`;
      } else {
        setIsSuccess(true);
        setIsLoading(false);
        data.successMessage = "Account activated";
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return `Something went wrong: ${error.message}`;
      } else {
        return `Something went wrong: ${error}`;
      }
    }
  };
}
