
import React from "react";
import styles from "./Cards.module.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/Features/cartSlice";

const Cards = ({ id, name, description, image, price, category, stock }) => {

  const dispatch = useDispatch();

  return (
    <div className={styles.cardContainer}>
      <div className={styles.priceIconsContainer}>
        <h4 className={styles.price}>${price}</h4>
        <div className={styles.iconsContainer}>

          <BookmarkBorderIcon className={styles.icon} titleAccess='Guardar' />
          <button onClick={() => dispatch(addItemToCart({id, name, price, stock, image, description}))}>
          <ShoppingCartOutlinedIcon
            className={styles.icon}
            titleAccess='Agregar al carrito'/>
            </button>
        </div>
      </div>
      <div className={styles.imageContainer}>

        <Link to={`/product/${id}`} className={styles.cardLink}>
          <img src={image} alt="image" className={styles.image} />
        </Link>

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
