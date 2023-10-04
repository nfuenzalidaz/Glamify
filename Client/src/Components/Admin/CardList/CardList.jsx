// import React from 'react';
// import styles from './CardList.module.css';
// import Cards from '../Cards/Cards';

// const CardList = ({ allProducts }) => {
// 	return (
// 		<div className={styles.cards}>
// 			{allProducts.map(
// 				({ id, name, description, image, price, category, stock }) => {
// 					return (
// 						<Cards
// 							key={id}
// 							id={id}
// 							name={name}
// 							description={description}
// 							image={image}
// 							price={price}
// 							category={category}
// 							stock={stock}
// 						/>
// 					);
// 				}
// 			)}
// 		</div>
// 	);
// };

// export default CardList;
// ProductList.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchProducts,
	updateProduct as updateProductAction,
} from '../../../Redux/Features/productSlice';
import Modal from 'react-modal';
import styles from './CardList.module.css';
const CardList = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.product.allProducts);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editedProduct, setEditedProduct] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const openEditModal = (product) => {
		setIsModalOpen(true);
		setEditedProduct(product);
	};

	const closeEditModal = () => {
		setIsModalOpen(false);
		setEditedProduct({});
	};

	const handleEditInputChange = (e) => {
		const { name, value } = e.target;
		setEditedProduct({
			...editedProduct,
			[name]: value,
		});
	};

	const handleEditSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		dispatch(updateProductAction({ id: editedProduct.id, data: editedProduct }))
			.then(() => {
				setIsSubmitting(false);
				closeEditModal();
				dispatch(fetchProducts());
			})
			.catch((error) => {
				setIsSubmitting(false);
			});
	};

	return (
		<div className={styles.CardsListcontainer}>
			<div className={styles.cardslisttitles}>
				<div>Nombre</div>
				<div> Descripcion </div>
				<div> Precio </div>
				<div> stock </div>
				<div> categoria</div>
				<div> Genero </div>
			</div>
			<ul className={styles.CardsUlContainer}>
				{allProducts.map((product) => (
					<li key={product.id} className={styles.CardsLiContainer}>
						<div>{product.name}</div>
						<div> {product.description}</div>
						<div> ${product.price}</div>
						<div> {product.stock}</div>
						<div> {product.category}</div>
						<div> {product.gender}</div>
						<button onClick={() => openEditModal(product)}>Editar</button>
					</li>
				))}
			</ul>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeEditModal}
				contentLabel='Editar Producto'
				className={styles.modal}
			>
				<h2>Editar Producto</h2>
				<form onSubmit={handleEditSubmit}>
					<label htmlFor='name'>Nombre:</label>
					<input
						type='text'
						name='name'
						value={editedProduct.name || ''}
						onChange={handleEditInputChange}
						required
					/>
					<label htmlFor='description'>Descripción:</label>
					<input
						type='text'
						name='description'
						value={editedProduct.description || ''}
						onChange={handleEditInputChange}
					/>
					<label htmlFor='category'>Categoría:</label>
					<input
						type='text'
						name='category'
						value={editedProduct.category || ''}
						onChange={handleEditInputChange}
					/>
					<label htmlFor='price'>Precio:</label>
					<input
						type='text'
						name='price'
						value={editedProduct.price || ''}
						onChange={handleEditInputChange}
						required
					/>
					<label htmlFor='stock'>Stock:</label>
					<input
						type='text'
						name='stock'
						value={editedProduct.stock || ''}
						onChange={handleEditInputChange}
						required
					/>
					<label htmlFor='stock'>Genero:</label>
					<input
						type='text'
						name='gender'
						value={editedProduct.gender || ''}
						onChange={handleEditInputChange}
						required
					/>
					<button type='submit' disabled={isSubmitting}>
						Guardar Cambios
					</button>
					<button
						onClick={closeEditModal}
						type='button'
						disabled={isSubmitting}
					>
						Cancelar
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default CardList;
