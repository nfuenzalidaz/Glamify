import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.css'; 

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" className={styles.searchBox} placeholder="Buscar..." />
      <button className={styles.searchBtn}>
        <FontAwesomeIcon icon={faSearch} />
        Search...
      </button>
    </div>
  );
}

export default Search;

