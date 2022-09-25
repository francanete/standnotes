import useLocalStorage from "use-local-storage";
import { Home } from "./pages/Home";

import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NoteProfile } from "./pages/NoteProfile";
import { NoteCreate } from "./pages/NoteCreate";
import { NavBar } from "./components/NavBar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

export const App = () => {
  const { user } = useAuthContext();
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="Container">
        <BrowserRouter>
          <NavBar theme={theme} switchTheme={switchTheme} />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/note/create"
              element={user ? <NoteCreate /> : <Navigate to="/login" />}
            />
            <Route
              path="/note/:noteId"
              element={user ? <NoteProfile /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
