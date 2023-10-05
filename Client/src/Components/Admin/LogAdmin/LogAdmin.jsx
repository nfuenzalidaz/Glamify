import React, { useState } from 'react';
import { useLocalStorage } from '../../../Hooks/useLocalStorage';
import styles from './LogAdmin.module.css';

const Login = ({ login }) => {
	// const [errors, setErrors] = useState({});
	const [userData, setUserData] = useLocalStorage('userData', {
		email: '',
		password: '',
	  });

	  const handlerChange = (e) => {
		setUserData({
		  ...userData,
		  [e.target.name]: e.target.value,
		});
	  };

	const handleSubmit = (e) => {
		e.preventDefault();
		login(userData);
	};

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h2 className={styles.logInMsg}>Inicio de Sesión</h2>
				<div className={styles.emailContainer}>
					<label htmlFor='email'>Correo Electrónico:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={userData.email}
						onChange={handlerChange}
						required
					/>
				</div>
				<div className={styles.passwordContainer}>
					<label htmlFor='password'>Contraseña:</label>
					<input
						type='password'
						id='password'
						name='password'
						value={userData.password}
						onChange={handlerChange}
						required
					/>
				</div>
				<button type='submit' className={styles.button}>Iniciar Sesión</button>
			</form>
		</div>
	);
};

export default Login;
