import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../Redux/Features/productSlice';


export const Searchbar = (data) => {
 
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
  
    const searchHandler = (event) => {
      const value = event.target.value;
      setSearch(value);
    }
   
    const submitHandler = () => {
      const searchString = String(search);
      dispatch(searchProducts(searchString));
    }
     console.log(searchProducts);
    return (
    <div>
      <input placeholder="Buscar..." type="text" onChange={searchHandler} />
      <button type="button" onClick={submitHandler}>Buscar</button>
    </div>
    )
};

export default Searchbar;