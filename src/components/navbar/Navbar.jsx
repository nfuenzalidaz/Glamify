import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <Link href="/home">
        <Image
          src="/images/Glamify-logo-negro.png"
          width={60}
          height={60}
          alt="logo glamify"
          priority={true}
        />
      </Link>
      <ul className={styles.lista}>
        <li>
          <Link href="/productos">Inicio</Link>
        </li>
        <li>
          <Link href="/productos/hombres">Hombre</Link>
        </li>
        <li>
          <Link href="/productos/mujeres">Mujeres</Link>
        </li>
        <li>
          <Link href="/productos/accesorios">Accesorios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
