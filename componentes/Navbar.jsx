import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/home'>Inicio</Link>
        </li>
        <li>
          <Link href='/men'>Hombre</Link>
        </li>
        <li>
          <Link href='/women'>Mujeres</Link>
        </li>
        <li>
          <Link href='/accesories'>Accesorios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
