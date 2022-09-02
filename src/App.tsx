import useLocalStorage from "use-local-storage";
import { Home } from "./pages/Home";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoteProfile } from "./pages/NoteProfile";

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
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <div className="Container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note/:noteId" element={<NoteProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
