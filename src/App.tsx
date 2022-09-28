import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeContainer } from "./components/ThemeContainer";
import { MainRoutes } from "./routes/MainRoutes";

import "./App.scss";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeContainer>
            <MainRoutes />
          </ThemeContainer>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthContextProvider>
  );
};
