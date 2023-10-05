import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import glamify from "../../assets/Glamify-logo-negro.png";
import Logged from "../Logged/Logged";
import Loader from "../Loader/Loader";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading)
    return (
      <div className={styles.LoaderDiv}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.logoContainer}>
        <NavLink className={styles.create} to="/">
          <img
            src={glamify}
            alt="Glamify Logo"
            className={styles.logo}
            title="Glamify"
          />
        </NavLink>
      </div>

      <div className={styles.containersecondary}>
        <NavLink to="/home" className={styles.NavLink} title="INICIO">
          INICIO
        </NavLink>
        <NavLink to="/hombre" className={styles.NavLink} title="HOMBRE">
          HOMBRE
        </NavLink>
        <NavLink to="/mujer" className={styles.NavLink} title="MUJER">
          MUJER
        </NavLink>
        <NavLink to="/accesorios" className={styles.NavLink} title="ACCESORIOS">
          ACCESORIOS
        </NavLink>
        {isAuthenticated ? (
          <Logged />
        ) : (
          <NavLink
            onClick={() => loginWithRedirect()}
            className={styles.NavLink}
          >
            INICIAR SESION
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
