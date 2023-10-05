import styles from './userList.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/Features/userSlice';
import UserCard from '../UserCard/UserCard';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import AdminSearchbar from '../AdminSearchbar/AdminSearchbar';

const UserList = () => {
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.user.allUsers);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<>
			<AdminNavBar />
			<AdminSearchbar />

			<div className={styles.mainContainer}>
				<div className={styles.labelContainer}>
					<div className={styles.nameContainer}>
						<label htmlFor='name'>NOMBRE</label>
					</div>
					<div className={styles.emailContainer}>
						<label htmlFor='email'>EMAIL</label>
					</div>
					<div className={styles.statusContainer}>
						<label htmlFor='status'>ESTADO</label>
					</div>
				</div>
				{allUsers.map(({ id, name, email, blocked }) => {
					return (
						<UserCard
							key={id}
							id={id}
							name={name}
							email={email}
							blocked={blocked}
						/>
					);
				})}
			</div>
		</>
	);
};

export default UserList;
