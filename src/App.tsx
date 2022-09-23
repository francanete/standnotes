import useLocalStorage from "use-local-storage";
import { Home } from "./pages/Home";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoteProfile } from "./pages/NoteProfile";
import { NoteCreate } from "./pages/NoteCreate";
import { NavBar } from "./components/NavBar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const App = () => {
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/note/create" element={<NoteCreate />} />
            <Route path="/note/:noteId" element={<NoteProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
