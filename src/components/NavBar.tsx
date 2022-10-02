import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Logo } from "./logo";
import { Button } from "./Button";
import { FaPlus } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { TbBulbOff } from "react-icons/tb";

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
    <>
      <div className={styles["NavBar"]}>
        <Link to={"/"}>
          <Logo color={theme === "light" ? "#000" : "#fff"} />
        </Link>
        {/* {user && (
          <nav className={styles["NavBar__menu"]}>
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )} */}
        <div className={styles["NavBar__access"]}>
          {user ? (
            <>
              <span className={styles["NavBar__access--email"]}>
                {user && user.email}
              </span>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to={"/signup"}>Signup</Link>
              <Link to={"/login"}>
                <Button>Login</Button>
              </Link>
            </>
          )}
        </div>

        <button onClick={switchTheme} className={styles["NavBar__theme"]}>
          {theme === "light" ? (
            <TbBulbOff size={24} />
          ) : (
            <TbBulb color="#EBC351" size={24} />
          )}
        </button>
      </div>
      {user && (
        <div className={styles["NavBar__secondary"]}>
          <Button>
            <FaPlus />
            StandNote
          </Button>
        </div>
      )}
    </>
  );
};
