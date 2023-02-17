import { useState } from "react";

export function useActivation(activationToken: string | undefined) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const activate = async () => {
    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/user/activate`,
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
        errorMessage: "",
      };

      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(json.error);
        data.error = `Something went wrong: ${json.error}`;
      } else {
        setIsSuccess(true);
        setIsLoading(false);
        setSuccessMessage("Account activated");
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

  return {
    activate,
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    successMessage,
  };
}
