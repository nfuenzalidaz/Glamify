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
        <div>NOMBRE</div>
        <div>DESCRIPCION</div>
        <div>PRECIO</div>
        <div>STOCK</div>
        <div>CATEGORIA</div>
        <div>GENERO</div>
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
            <button className={styles.buttonEdit}onClick={() => openEditModal(product)}>EDITAR</button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeEditModal}
        contentLabel='Editar Producto'
        className={styles.modal}
      >
        <form className={styles.formContainer}onSubmit={handleEditSubmit}>
        <h2>Editar Producto</h2>
          <label className={styles.labels}htmlFor='name'>NOMBRE:</label>
          <input className={styles.inputs}
            type='text'
            name='name'
            value={editedProduct.name || ''}
            onChange={handleEditInputChange}
            required
          />
          <label className={styles.labels} htmlFor='description'>DESCRIPCION:</label>
          <input className={styles.inputs}
            type='text'
            name='description'
            value={editedProduct.description || ''}
            onChange={handleEditInputChange}
          />
          <label className={styles.labels} htmlFor='category'>CATEGORIA:</label>
          <input className={styles.inputs}
            type='text'
            name='category'
            value={editedProduct.category || ''}
            onChange={handleEditInputChange}
          />
          <label className={styles.labels} htmlFor='price'>PRECIO:</label>
          <input className={styles.inputs}
            type='text'
            name='price'
            value={editedProduct.price || ''}
            onChange={handleEditInputChange}
            required
          />
          <label className={styles.labels} htmlFor='stock'>STOCK:</label>
          <input className={styles.inputs}
            type='text'
            name='stock'
            value={editedProduct.stock || ''}
            onChange={handleEditInputChange}
            required
          />
          <label className={styles.labels} htmlFor='stock'>GENERO:</label>
          <input className={styles.inputs}
            type='text'
            name='gender'
            value={editedProduct.gender || ''}
            onChange={handleEditInputChange}
            required
          />
          <div className={styles.buttonsContainer}>
          <button className={styles.button1}type='submit' disabled={isSubmitting}>
            GUARDAR
          </button>
          <button
          className={styles.button2}
            onClick={closeEditModal}
            type='button'
            disabled={isSubmitting}
          >
            CERRAR
          </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CardList;
