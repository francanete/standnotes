import React from "react";
import useLocalStorage from "use-local-storage";
import "./App.scss";
import { Button } from "./components/Button";

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
        <h1>Hola Dark</h1>
      </div>
    </div>
  );
};
