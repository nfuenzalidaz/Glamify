import React, { useState } from 'react';

const Login = ({ login }) => {
	// const [errors, setErrors] = useState({});
	const [userData, setUserdata] = useState({
		email: '',
		password: '',
	});

	const handlerChange = (e) => {
		setUserdata({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login(userData);
	};

	return (
		<div>
			<h2>Inicio de Sesión</h2>
			<form onSubmit={handleSubmit}>
				<div>
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
				<div>
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
				<div>
					<button type='submit'>Iniciar Sesión</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
