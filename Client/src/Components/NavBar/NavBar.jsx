import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import styles from "./NavBar.module.css";
import glamify from "../../assets/Glamify-logo-negro.png";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const textSection =
    pathname === "/hombre"
      ? "HOMBRES"
      : pathname === "/mujer"
      ? "MUJERES"
      : pathname === "/accesorios"
      ? "ACCESORIOS"
      : null;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.logoContainer}>
        <NavLink className={styles.create} to="/home">
          <img
            src={glamify}
            alt="Glamify Logo"
            className={styles.logo}
            title="Glamify"
          />
        </NavLink>
      </div>

      <div
        className={`${styles.containersecondary} ${
          isOpen ? styles.menuOpen : ""
        }`}
      >
        {isOpen && (
          <div className={styles.closeButton} onClick={toggleMenu}>
            <IoClose className={styles.closeIcon} />
          </div>
        )}

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
        <NavLink to="/create" className={styles.NavLink} title="CREAR PRODUCTO">
          CREAR
        </NavLink>
      </div>
      <div className={styles.hamburguerIcon} onClick={toggleMenu}>
        <GiHamburgerMenu className={styles.menuIcon} />
      </div>
      <div className={styles.footerText}>{textSection}</div>
    </div>
  );
};

export default NavBar;
