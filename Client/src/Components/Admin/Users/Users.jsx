import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/Features/userSlice';
import Navbar from '../NavBar/NavBar';
const Users = () => {
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.user.allUsers);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div>
			<Navbar />
			<h1>LISTA DE USUARIOS</h1>
			<ul>
				{allUsers.map((user) => (
					<li key={user.id}>
						{/* <div>ID: {user.id}</div> */}
						<div>Nombre: {user.name}</div>
						<div>Email: {user.email}</div>
						{/* <div>Imagen: {user.image}</div> */}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
