import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../Redux/Features/productSlice';
import Style from './searchbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Searchbar = (data) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const searchHandler = (event) => {
    const value = event.target.value;
    // setSearch(event.target.value);
    // console.log(search);
    dispatch(searchProducts(value));
  };

  const submitHandler = () => {
    //   console.log(search);
    //   const searchString = String(search);
    //   console.log(String(search));
    //   dispatch(searchProducts(searchString));
  };
  // console.log(searchProducts);
  return (
    <div className={Style.searchcontainer}>
      <form className={Style.form}>
        <button className={Style.lupa} type='button' onClick={submitHandler}>
          <SearchIcon />
        </button>
        <input
          className={Style.input}
          placeholder='BUSCAR...'
          type='text'
          onChange={searchHandler}
        />
      </form>
      <div>
        <button className={Style.guardado}>
          <BookmarkBorderIcon />
        </button>
        <button className={Style.carrito}>
          <ShoppingCartOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
