import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./App";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthContextProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
