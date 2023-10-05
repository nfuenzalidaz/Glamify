import React, { useState } from 'react';
import styles from './userCard.module.css';
import { updateUser, fetchUsers } from '../../../Redux/Features/userSlice';
import { useDispatch } from 'react-redux';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const UserCard = ({ id, name, email, blocked }) => {
	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState(!blocked);

	const handleStatus = async () => {
		await dispatch(updateUser({ id }));
		await dispatch(fetchUsers());
		setIsActive(!isActive);
	};

	let status = isActive ? 'ACTIVO' : 'INACTIVO';

	return (
		<div className={styles.mainContainer}>
			<div className={styles.nameContainer}>
				<h2>{name.toUpperCase()}</h2>
			</div>
			<div className={styles.emailContainer}>
				<h4>{email.toUpperCase()}</h4>
			</div>
			<div className={styles.buttonsContainer}>
				<h5>{status}</h5>
				<button className={styles.buttonStatus} onClick={handleStatus}>
					{isActive ? (
						<CancelPresentationIcon
							className={styles.iconStatus}
							titleAccess='Bloquear usuario'
						/>
					) : (
						<CheckBoxOutlinedIcon
							className={styles.iconStatus}
							titleAccess='Desbloquear usuario'
						/>
					)}
				</button>
				{/* <button className={styles.modifyButton}>MODIFICAR</button> */}
			</div>
		</div>
	);
};

export default UserCard;
