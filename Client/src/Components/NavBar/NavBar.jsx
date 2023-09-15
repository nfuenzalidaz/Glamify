import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import glamify from "../../assets/Glamify-logo-negro.png";
import woman from "../../assets/woman.jpg";

const NavBar = () => {

  return (
    <div className={styles.NavBarContainer}>
      {/* <img src={woman} alt="woman" className={styles.imageWoman} /> */}
      <div>
        <img src={glamify} alt="Glamify Logo" className={styles.logo} />
      </div>
      <div className={styles.links}>
        <NavLink to="/home" className={styles.NavLink} title="HOME">
          HOME
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
      </div>
    </div>
  );
};

export default NavBar;
