import React from 'react';
import styles from './AdminSearchbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchUsersByName } from '../../../Redux/Features/userSlice';

const AdminSearchbar = () => {
	const dispatch = useDispatch();

	const handlerSearch = (event) => {
		const value = event.target.value;
		dispatch(searchUsersByName(value));
	};

	return (
		<div>
			<form className={styles.form}>
				<button className={styles.lupa} type='button'>
					<SearchIcon />
				</button>
				<input
					className={styles.input}
					placeholder='BUSCAR CLIENTES...'
					type='text'
					onChange={handlerSearch}
				/>
			</form>
		</div>
	);
};

export default AdminSearchbar;
