import { useDispatch } from "react-redux";
import {
  favoriteSort,
  favoriteType,
  resetFilters,
} from "../../Redux/Features/favoriteSlice";
import { useState } from "react";
import styles from "./FilterFavorites.module.css";

const FilterFavorites = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    type: "",
    sort: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });

    if (name === "sort") {
      dispatch(favoriteSort(value));
    } else if (name === "type") {
      dispatch(favoriteType(value));
    }
  };

  const handleReset = () => {
    dispatch(resetFilters(""));
    setInput({ type: "", sort: "" });
  };

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        name="type"
        value={input.type}
        onChange={handleFilterChange}
      >
        <option value="">CATEGORIAS</option>
        <option value="calzado">CALZADO</option>
        <option value="jeans">JEANS</option>
        <option value="sudadera">SUDADERA</option>
        <option value="camisa">CAMISA</option>
        <option value="abrigo">ABRIGO</option>
        <option value="accesorio">ACCESORIO</option>
      </select>
      <select
        className={styles.select}
        name="sort"
        value={input.sort}
        onChange={handleFilterChange}
      >
        <option value="">ORDENAR POR</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="precioMax">Mayor Precio</option>
        <option value="precioMin">Menor Precio</option>
      </select>
      <button className={styles.buttonReset} onClick={handleReset}>
        RESTABLECER FILTROS
      </button>
    </div>
  );
};

export default FilterFavorites;
