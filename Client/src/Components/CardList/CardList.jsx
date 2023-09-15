import React from "react";
import styles from "./CardList.module.css";
import Cards from "../Cards/Cards";

const CardList = ({ allProducts, section }) => {
  const filteredProducts =
    section === "home"
      ? allProducts
      : allProducts.filter((product) => product.gender === section);

  return (
    <div className={styles.cards}>
      {filteredProducts.map(
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
