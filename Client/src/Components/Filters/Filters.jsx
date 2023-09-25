import { useState } from 'react';
import styles from './Filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  productSort,
  productType,
  resetFilters,
} from '../../Redux/Features/productSlice';

const InitialCreate = {
  type: '',
  sort: '',
};

const Filters = () => {
  const [input, setInput] = useState(InitialCreate);
  const dispatch = useDispatch();

  const handleType = (event) => {
    setInput(event.target.value);
    dispatch(productType(event.target.value));
  };

  const handleSort = (event) => {
    setInput(event.target.value);
    dispatch(productSort(event.target.value));
  };

  const handleReset = (event) => {
    dispatch(resetFilters(event.target.value));
    setInput(InitialCreate);
  };

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        id='type'
        name='type'
        value={input.type}
        onChange={handleType}
      >
        <option value=''>CATEGORIAS</option>
        <option value='calzado'>CALZADO</option>
        <option value='jeans'>JEANS</option>
        <option value='sudadera'>SUDADERA</option>
        <option value='camisa'>CAMISA</option>
        <option value='abrigo'>ABRIGO</option>
        <option value='accesorio'>ACCESORIO</option>
      </select>
      <select
        className={styles.select}
        id='sort'
        name='sort'
        value={input.sort}
        onChange={handleSort}
      >
        <option value=''>ORDENAR POR</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
        <option value='precioMax'>Mayor Precio</option>
        <option value='precioMin'>Menor Precio</option>
      </select>
      <button className={styles.buttonReset} onClick={handleReset}>
        RESTABLECER FILTROS
      </button>
    </div>
  );
};

export default Filters;
