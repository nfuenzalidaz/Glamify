import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../Redux/Features/productSlice';
import Style from './Searchbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';

const customModalStyles = {
  content: {
    width: '35%',
    margin: '0 auto',
    right: '-50%',
    height: '100%',
    top: '0',
    left: 'auto',
    borderRadius: '0',
    animation: 'slideIn 0.5s ease-in-out',
  },
};

export const Searchbar = (data) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const itemQuantity = useSelector((state) => state.cart.itemQuantity);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const searchHandler = (event) => {
    const value = event.target.value;
    dispatch(searchProducts(value));
  };

  const submitHandler = () => {
  };

  const openModal = () => {
    customModalStyles.content.right = '0';
    setModalIsOpen(true);
  };

  const closeModal = () => {
    customModalStyles.content.right = '-50%';
    setModalIsOpen(false);
  };

  return (
    <div className={Style.searchcontainer}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Carrito de Compras"
        ariaHideApp={false}
        style={customModalStyles}
      >
        <button className={Style.closeModal} onClick={closeModal}><ArrowForwardIosIcon/></button>
        <span className={Style.shoppingTittle}>CARRITO DE COMPRAS</span>
        <div><ShoppingCart /></div>
      </Modal>
      <form className={Style.form}>
        <button className={Style.lupa} type='button' onClick={submitHandler}>
          <SearchIcon />
        </button>
        <input
          className={Style.input}
          placeholder='BUSCAR PRODUCTOS...'
          type='text'
          onChange={searchHandler}
        />
      </form>
      <div className={Style.iconsNavbar}>
        <button className={Style.guardado}>
        <NavLink to="/favoritos" className={Style.link}>
            <BookmarkBorderIcon />
          </NavLink>
        </button>
        <button className={Style.carrito} onClick={openModal}>
          <div className={Style.shoppingCartContainer}>
            <div className={Style.numberContainer}>
              <h1>{itemQuantity}</h1>
            </div>
            <ShoppingCartOutlinedIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;

