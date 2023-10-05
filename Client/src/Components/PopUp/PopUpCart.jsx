import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../Redux/Features/cartSlice.js';
import styles from './PopUpCart.module.css';

function PopUpCart() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleAccept = () => {
		dispatch(clearCart());
		navigate('/home');
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.thanks}>
				<h1 className={styles.h1}>GRACIAS POR COMPRAR EN GLAMIFY</h1>
			</div>
			<div className={styles.contentContainer}>
				<p>SU COMPRA FUE REALIZADA CON EXITO</p>
				<button className={styles.button} onClick={handleAccept}>
					ACEPTAR
				</button>
			</div>
		</div>
	);
}

export default PopUpCart;
