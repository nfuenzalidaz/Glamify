import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../Redux/Features/productSlice';
import Style from './Searchbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Searchbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const itemQuantity = useSelector((state) => state.cart.itemQuantity);
  const [listening, setListening] = useState(false);

  const searchHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
    dispatch(searchProducts(value));
  };

  const startListening = () => {
    setListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es-ES'; 

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearch(transcript);
      dispatch(searchProducts(transcript));
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className={Style.searchcontainer}>
      <form className={Style.form}>
      <button className={Style.mic} type='button' onClick={startListening}>
          <MicIcon />
        </button>
        <button className={Style.lupa} type='button' onClick={() => searchHandler()}>
          <SearchIcon />
        </button>
        <input
          className={Style.input}
          placeholder='BUSCAR PRODUCTOS...'
          type='text'
          onChange={searchHandler}
          value={search}
        />
      </form>
      <div>
        <button className={Style.guardado}>
          <BookmarkBorderIcon />
        </button>
        <button className={Style.carrito}>
          <Link to='/cart' className={Style.link}>
            <div>
            <h1>{itemQuantity}</h1>
            <ShoppingCartOutlinedIcon />
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
