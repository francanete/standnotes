import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Logo } from "./logo";
import { Button } from "./Button";
import { FaPlus } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { TbBulbOff } from "react-icons/tb";
import { ImArrowLeft2 } from "react-icons/im";
import { useLocation } from "react-router-dom";

import styles from "./NavBar.module.scss";

interface INavBar {
  theme: string;
  switchTheme: () => void;
}

export const NavBar = ({ theme, switchTheme }: INavBar) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const path = useLocation().pathname;
  const isRoot = path === "/";

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className={styles["NavBar"]}>
        <Link to={"/"}>
          <Logo color={theme === "light" ? "#000" : "#fff"} />
        </Link>
        <div className={styles["NavBar__access"]}>
          {user ? (
            <>
              <span className={styles["NavBar__access--email"]}>
                {user && user.email}
              </span>
              <Button onClick={handleLogout}>Log out</Button>
            </>
          ) : (
            <>
              <Link to={"/signup"}>Register</Link>
              <Link to={"/login"}>
                <Button>Log in</Button>
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
          <div>
            {isRoot ? (
              <Link to={"/note/create"}>
                <Button>
                  <FaPlus />
                  StandNote
                </Button>
              </Link>
            ) : (
              <Link to={"/"}>
                <Button>
                  <ImArrowLeft2 />
                  All Notes
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
