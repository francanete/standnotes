import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext({} as any);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: "LOGIN", payload: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
