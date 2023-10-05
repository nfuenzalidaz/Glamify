import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './PopUpUserBlock.module.css';

const PopUpUserBlock = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleUser = () => {
		dispatch;
		navigate('/');
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.contentContainer}>
				<p>
					SU CUENTA HA SIDO BLOQUEADA. SOLO PUEDE ACCEDER PARA VER EL CATÁLOGO
				</p>
				<button className={styles.button} onClick={handleUser}>
					ACEPTAR
				</button>
			</div>
		</div>
	);
};

export default PopUpUserBlock;
