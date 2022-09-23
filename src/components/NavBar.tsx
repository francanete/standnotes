import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
export const NavBar = ({
  theme,
  switchTheme,
}: {
  theme: string;
  switchTheme: () => void;
}) => {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create",
      path: "/note/create",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Signup",
      path: "/signup",
    },
  ];

  return (
    <div className={styles["NavBar"]}>
      <nav>
        <ul className={styles["NavBar__menu"]}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={switchTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};
