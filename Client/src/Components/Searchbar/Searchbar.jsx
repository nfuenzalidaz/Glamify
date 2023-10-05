import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../Redux/Features/productSlice';
import Style from './Searchbar.module.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

export const Searchbar = ({onSpeechRecognition}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const itemQuantity = useSelector((state) => state.cart.itemQuantity);
  const [transcription, setTranscription] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isTranscriptionActive, setIsTranscriptionActive] = useState(true);


  const handleSpeechRecognition = (transcript) => {
    if (isTranscriptionActive) {
      setTranscription(transcript);
      dispatch(searchProducts(transcript));
    }
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

      <Microfono
        onSpeechRecognition={handleSpeechRecognition}
        search={search}
      />
      <form className={Style.form}>

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