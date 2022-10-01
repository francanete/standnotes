import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Logo } from "./logo";
import { Button } from "./Button";
import Moon from "../components/icons/Moon";
import Bulb from "./icons/Bulb";

import styles from "./NavBar.module.scss";

export const NavBar = ({
  theme,
  switchTheme,
}: {
  theme: string;
  switchTheme: () => void;
}) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const menuItems = [
    {
      name: "Create",
      path: "/note/create",
    },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles["NavBar"]}>
      <Link to={"/"}>
        <Logo color={theme === "light" ? "#000" : "#fff"} />
      </Link>
      {user && (
        <nav className={styles["NavBar__menu"]}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className={styles["NavBar__access"]}>
        {user ? (
          <>
            <span>{user && user.email}</span>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button>Login</Button>
        )}
      </div>

      <button onClick={switchTheme} className={styles["NavBar__theme"]}>
        {theme === "light" ? <Moon /> : <Bulb />}
      </button>
    </div>
  );
};
