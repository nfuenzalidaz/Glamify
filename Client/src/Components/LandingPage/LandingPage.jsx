import styles from './LandingPage.module.css';
import CallMadeIcon from '@mui/icons-material/CallMade';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<div className={styles.MainContainer}>
			<div className={styles.Elements}>
				<div className={styles.TextContainer}>
					<p>
						Nuestro compromiso es ofrecerte piezas que destacan por
						<br />
						su elegancia, comodidad y durabilidad. Explora nuestro
						<br />
						catalogo y descubre la esencia de la moda que te hara
						<br />
						destacar en cualquier ocasion.
					</p>
				</div>
				<div className={styles.ButtonsContainer}>
					<Link
						onClick={() => loginWithRedirect()}
						to='/login'
						className={styles.Button1}
					>
						INICIAR SESION
					</Link>
					<Link to='/home' className={styles.Button2}>
						VER CATALOGO
						<span className={styles.Icon}>
							<CallMadeIcon />
						</span>
					</Link>
				</div>
				<div className={styles.socialsContainer}>
					<button className={styles.socialButtons}>
						<InstagramIcon />
					</button>
					<button className={styles.socialButtons}>
						<TwitterIcon />
					</button>
					<button className={styles.socialButtons}>
						<FacebookIcon />
					</button>
				</div>
				<div className={styles.adminLog}>
					<Link to='/admin/login' className={styles.Button3}>
						INICIA COMO ADMINISTRADOR
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
