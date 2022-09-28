import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./NavBar.module.scss";
import { Logo } from "./logo";

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
      name: "Home",
      path: "/",
    },
    {
      name: "Create",
      path: "/note/create",
    },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Logo />
      <div className={styles["NavBar"]}>
        <nav>
          {user && (
            <ul className={styles["NavBar__menu"]}>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        {user && (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}

        <button onClick={switchTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
      <div>
        {" "}
        <span>{user && user.email}</span>
      </div>
    </>
  );
};
