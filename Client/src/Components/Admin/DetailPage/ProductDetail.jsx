// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import {
// 	searchProductsById,
// 	updateProduct,
// } from '../../../Redux/Features/productSlice';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import Modal from 'react-modal';
// import EditIcon from '@mui/icons-material/Edit';
// import styles from './ProductDetail.module.css';
// import { Link } from 'react-router-dom';
// import { Toaster, toast } from 'react-hot-toast';

// const ProductDetail = () => {
// 	const dispatch = useDispatch();
// 	const { id } = useParams();
// 	const products = useSelector((state) => state.product.productDetail);
// 	const [isModalOpen, setIsModalOpen] = useState(false);
// 	const [editedProduct, setEditedProduct] = useState({
// 		name: '',
// 		description: '',
// 		category: '',
// 		price: 0,
// 		stock: 0,
// 	});

// 	useEffect(() => {
// 		dispatch(searchProductsById(id));
// 	}, [dispatch, id]);

// 	if (!products) {
// 		return <h2>No existe ese producto</h2>;
// 	}

// 	useEffect(() => {
// 		if (products) {
// 			setEditedProduct(products);
// 		}
// 	}, [products]);

// 	const handleInputChange = (e) => {
// 		setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			await dispatch(updateProduct({ id, data: editedProduct }));
// 			setIsModalOpen(false);
// 			toast.success('Producto actualizado exitosamente!', {
// 				position: 'bottom-center',
// 			});
// 		} catch (error) {
// 			toast.error(
// 				'Error al actualizar el producto. Consulta la consola para más detalles.',
// 				{
// 					position: 'bottom-center',
// 				}
// 			);
// 		}
// 	};

// 	const openModal = () => {
// 		setIsModalOpen(true);
// 	};

// 	const closeModal = () => {
// 		setIsModalOpen(false);
// 	};

// 	return (
// 		<div className={styles.mainContainer}>
// 			<div className={styles.goBackContainer}>
// 				<Link to='/admin/productos' className={styles.linkBack}>
// 					<ArrowBackIosIcon className={styles.backIcon} />
// 				</Link>
// 			</div>
// 			<div className={styles.ImageContainer}>
// 				<img
// 					className={styles.imageSize}
// 					src={products.image}
// 					alt={products.image}
// 				/>
// 			</div>
// 			<div className={styles.DetailsText}>
// 				<h3 className={styles.nameStyle}>{products.name}</h3>
// 				<div className={styles.DetailsTextTwo}>
// 					<div className={styles.buttonContainer}></div>
// 					<button className={styles.EditIcon} onClick={openModal}>
// 						EDITAR PRODUCTO <EditIcon className={styles.EditIcon} />
// 					</button>
// 					<p>DESCRIPCION: {products.description}</p>
// 					<p>CATEGORIA: {products.category}</p>
// 					<p>PRECIO: $ {products.price}</p>
// 					<p>STOCK: {products.stock}</p>
// 				</div>
// 			</div>
// 			<Modal
// 				isOpen={isModalOpen}
// 				onRequestClose={closeModal}
// 				contentLabel='Editar Producto'
// 				className={styles.modal}
// 			>
// 				<h2>Editar Producto</h2>
// 				<form onSubmit={handleSubmit}>
// 					<label htmlFor='name'>Nombre:</label>
// 					<input
// 						type='text'
// 						name='name'
// 						value={editedProduct.name || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='description'>Descripción:</label>
// 					<input
// 						type='text'
// 						name='description'
// 						value={editedProduct.description || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='category'>Categoría:</label>
// 					<input
// 						type='text'
// 						name='category'
// 						value={editedProduct.category || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='price'>Precio:</label>
// 					<input
// 						type='text'
// 						name='price'
// 						value={editedProduct.price || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='stock'>Stock:</label>
// 					<input
// 						type='text'
// 						name='stock'
// 						value={editedProduct.stock || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<button type='submit'>Guardar Cambios</button>
// 					<button onClick={closeModal} type='button'>
// 						Cancelar
// 					</button>
// 				</form>
// 			</Modal>
// 			<Toaster
// 				toastOptions={{
// 					className: '',
// 					style: {
// 						border: '2px solid #000000',
// 						padding: '10px',
// 						color: '#ffffff',
// 						background: '#000000',
// 					},
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export default ProductDetail;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import {
// 	searchProductsById,
// 	updateProduct,
// } from '../../../Redux/Features/productSlice';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import Modal from 'react-modal';
// import EditIcon from '@mui/icons-material/Edit';
// import styles from './ProductDetail.module.css';
// import { Link } from 'react-router-dom';
// import { Toaster, toast } from 'react-hot-toast';
// const ProductDetail = () => {
// 	const dispatch = useDispatch();
// 	const { id } = useParams();
// 	const products = useSelector((state) => state.product.productDetail);
// 	const [isModalOpen, setIsModalOpen] = useState(false);
// 	const [editedProduct, setEditedProduct] = useState({
// 		name: '',
// 		description: '',
// 		category: '',
// 		price: 0,
// 		stock: 0,
// 	});

// 	useEffect(() => {
// 		dispatch(searchProductsById(id));
// 	}, [dispatch, id]);

// 	if (!products) {
// 		return <h2>No existe ese producto</h2>;
// 	}

// 	useEffect(() => {
// 		if (products) {
// 			setEditedProduct(products);
// 		}
// 	}, [products]);

// 	const handleInputChange = (e) => {
// 		setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
// 	};
// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		if (products) {
// 			dispatch(updateProduct({ id: products.id, data: editedProduct }));
// 		}

// 		setIsModalOpen(false);
// 		toast.success('Producto actualizado exitosamente!', {
// 			position: 'bottom-center',
// 		});
// 	};

// 	const openModal = () => {
// 		setIsModalOpen(true);
// 	};

// 	const closeModal = () => {
// 		setIsModalOpen(false);
// 	};

// 	return (
// 		<div className={styles.mainContainer}>
// 			<div className={styles.goBackContainer}>
// 				<Link to='/admin/productos' className={styles.linkBack}>
// 					<ArrowBackIosIcon className={styles.backIcon} />
// 				</Link>
// 			</div>
// 			<div className={styles.ImageContainer}>
// 				<img
// 					className={styles.imageSize}
// 					src={products.image}
// 					alt={products.image}
// 				/>
// 			</div>
// 			<div className={styles.DetailsText}>
// 				<h3 className={styles.nameStyle}>{products.name}</h3>
// 				<div className={styles.DetailsTextTwo}>
// 					<div className={styles.buttonContainer}></div>
// 					<button className={styles.EditIcon} onClick={openModal}>
// 						EDITAR PRODUCTO <EditIcon className={styles.EditIcon} />
// 					</button>
// 					<p>DESCRIPCION: {products.description}</p>
// 					<p>CATEGORIA: {products.category}</p>
// 					<p>PRECIO: $ {products.price}</p>
// 					<p>STOCK: {products.stock}</p>
// 				</div>
// 			</div>
// 			<Modal
// 				isOpen={isModalOpen}
// 				onRequestClose={closeModal}
// 				contentLabel='Editar Producto'
// 				className={styles.modal}
// 			>
// 				<h2>Editar Producto</h2>
// 				<form onSubmit={handleSubmit}>
// 					<label htmlFor='name'>Nombre:</label>
// 					<input
// 						type='text'
// 						name='name'
// 						value={editedProduct.name || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='description'>Descripción:</label>
// 					<input
// 						type='text'
// 						name='description'
// 						value={editedProduct.description || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='category'>Categoría:</label>
// 					<input
// 						type='text'
// 						name='category'
// 						value={editedProduct.category || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='price'>Precio:</label>
// 					<input
// 						type='text'
// 						name='price'
// 						value={editedProduct.price || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<label htmlFor='stock'>Stock:</label>
// 					<input
// 						type='text'
// 						name='stock'
// 						value={editedProduct.stock || ''}
// 						onChange={handleInputChange}
// 					/>
// 					<button type='submit'>Guardar Cambios</button>
// 					<button onClick={closeModal} type='button'>
// 						Cancelar
// 					</button>
// 				</form>
// 			</Modal>
// 			<Toaster
// 				toastOptions={{
// 					className: '',
// 					style: {
// 						border: '2px solid #000000',
// 						padding: '10px',
// 						color: '#ffffff',
// 						background: '#000000',
// 					},
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export default ProductDetail;
