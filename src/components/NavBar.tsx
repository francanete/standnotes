import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { Button } from "./Button";
import styles from "./NavBar.module.scss";

export const NavBar = ({
  theme,
  switchTheme,
}: {
  theme: string;
  switchTheme: () => void;
}) => {
  const { logout } = useLogout();

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

  const handleLogout = () => {
    logout();
  };

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
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <button onClick={switchTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};
