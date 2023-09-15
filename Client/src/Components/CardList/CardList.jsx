import React from 'react';
import styles from './CardList.module.css';
import Cards from '../Cards/Cards';

const CardList = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div className={styles.cards}>
      {allProducts.map(
        ({ id, name, description, image, price, category, stock }) => {
          return (
            <Cards
              key={id}
              id={id}
              name={name}
              description={description}
              image={image}
              price={price}
              category={category}
              stock={stock}
            />
          );
        }
      )}
    </div>
  );
};

export default CardList;
