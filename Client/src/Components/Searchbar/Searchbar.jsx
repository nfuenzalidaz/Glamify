import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../Redux/Features/productSlice';
import Style from './Searchbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Searchbar = (data) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const itemQuantity = useSelector((state) => state.cart.itemQuantity);

  const searchHandler = (event) => {
    const value = event.target.value;
    dispatch(searchProducts(value));
  };

  const submitHandler = () => {
  };
  return (
    <div className={Style.searchcontainer}>
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
