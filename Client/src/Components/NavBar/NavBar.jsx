import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import glamify from "../../assets/Glamify-logo-negro.png";
import LogOut from "../LogOut/LogOut";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>CARGANDO...</h1>

  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.logoContainer}>
        <NavLink className={styles.create} to="/create">
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
        { isAuthenticated && <LogOut/> }
      </div>
    </div>
  );
};

export default NavBar;
