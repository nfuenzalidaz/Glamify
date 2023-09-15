import React from "react";
import styles from "./Cards.module.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cards = ({ id, name, description, image, price, category, stock }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.priceIconsContainer}>
        <h4 className={styles.price}>${price}</h4>
        <div className={styles.iconsContainer}>
          <BookmarkBorderIcon className={styles.icon} titleAccess="Guardar"/>
          <ShoppingCartOutlinedIcon className={styles.icon} titleAccess="Agregar al carrito"/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="" className={styles.image} />
      </div>

      <div className={styles.nameContainer}>
        <h6 className={styles.name} title={name}>
          {name.toUpperCase()}
        </h6>
      </div>
    </div>
  );
};

export default Cards;
