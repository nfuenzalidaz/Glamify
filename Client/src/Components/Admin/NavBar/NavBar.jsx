import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import glamify from '../../../assets/Glamify-logo-negro.png';
import Logged from '../../Logged/Logged';

import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) return <h1>CARGANDO...</h1>;

	return (
		<div className={styles.NavBarContainer}>
			<div className={styles.logoContainer}>
				<NavLink className={styles.create} to='/admin'>
					<img
						src={glamify}
						alt='Glamify Logo'
						className={styles.logo}
						title='Glamify'
					/>
				</NavLink>
			</div>

			<div className={styles.containersecondary}>
				<NavLink to='/admin' className={styles.NavLink} title='INICIO'>
					INICIO
				</NavLink>
				<NavLink to='/admin/create' className={styles.NavLink} title='HOMBRE'>
					CREAR
				</NavLink>
				<NavLink to='/admin/venta' className={styles.NavLink} title='MUJER'>
					VENTAS
				</NavLink>
				<NavLink
					to='/admin/productos'
					className={styles.NavLink}
					title='ACCESORIOS'
				>
					PRODUCTOS
				</NavLink>
				<NavLink
					to='/admin/usuarios'
					className={styles.NavLink}
					title='USUARIOS'
				>
					USUARIOS
				</NavLink>
				<Logged />
			</div>
		</div>
	);
};

export default NavBar;
