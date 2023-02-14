import React from "react";
import { IUser } from "../types/user";

export async function setUser(
  response: Response,
  setError: (
    value: ((prevState: boolean | null) => boolean | null) | boolean
  ) => void,
  setIsLoading: (value: ((prevState: boolean) => boolean) | boolean) => void,
  dispatch: React.Dispatch<{
    type: string;
    payload: IUser;
  }>
) {
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
}
