import { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Redux/Features/cartSlice";
import {
  createFavorites,
  deleteFavorite,
  fetchFavoritesByUser,
} from "../../Redux/Features/favoriteSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import {toast} from "react-hot-toast";

const Cards = ({
  id,
  name,
  description,
  image,
  price,
  category,
  stock,
  isFavoritePage,
}) => {
  const dispatch = useDispatch();
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  // Obtener estado de favorito de localStorage
  const [isFavorite, setIsFavorite] = useLocalStorage(`favorite_${id}`, false);

  const favorites = useSelector((state) => state.favorite.favorites);

  // Verificar si el producto está en favoritos al cargar el componente
  const isProductInFavorites = favorites.some((fav) => fav.ProductId === id);

  useEffect(() => {
    setIsFavorite(isProductInFavorites);
  }, [isProductInFavorites]);

  const handleCartMouseEnter = () => {
    setIsCartHovered(true);
  };

  const handleCartMouseLeave = () => {
    setIsCartHovered(false);
  };

  const handleFavoriteMouseEnter = () => {
    setIsFavoriteHovered(true);
  };

  const handleFavoriteMouseLeave = () => {
    setIsFavoriteHovered(false);
  };

  const handleAddCart = () => {
    dispatch(addItemToCart({ id, name, price, stock, image, description }));
  };

  const handleDeleteFavorites = () => {
    const favoriteToDelete = favorites.find((fav) => fav.ProductId === id);

    if (favoriteToDelete) {
      dispatch(deleteFavorite(favoriteToDelete.id));
      setIsRemoving(true);
    }
  };

  const handleFavoriteClick = () => {
    if (isProductInFavorites) {
      handleDeleteFavorites();
      setIsFavorite(false);
      toast.success("Se agregó a favoritos!", { position: "bottom-center" });
    } else {
      dispatch(
        createFavorites({
          UserId: "6c8d6002-c550-48bd-9fe8-cc8b5321e3be",
          ProductId: id,
        })
      );
      setIsFavorite(true);
      toast.success("Se eliminó de favoritos!", { position: "bottom-center" });
    }
  };

  return (
    <div
      className={`${styles.cardContainer} ${
        isFavoritePage && isRemoving ? styles.removing : ""
      }`}
    >
      <div className={styles.priceIconsContainer}>
        <h4 className={styles.price}>${price}</h4>
        <div className={styles.iconsContainer}>
          {isFavoritePage ? (
            // Mostrar el botón de eliminar solo en la página de favoritos
            <button
              className={styles.deleteButton}
              onClick={handleDeleteFavorites}
            >
              <DeleteForeverIcon titleAccess="Eliminar" />
            </button>
          ) : (
            // Mostrar el botón de guardar en otras páginas
            <button
              onClick={handleFavoriteClick}
              className={styles.cardButtons}
              onMouseEnter={handleFavoriteMouseEnter}
              onMouseLeave={handleFavoriteMouseLeave}
            >
              {isFavorite || isFavoriteHovered ? (
                <BookmarkIcon titleAccess="Guardar" />
              ) : (
                <BookmarkBorderIcon titleAccess="Dejar de guardar" />
              )}
            </button>
          )}

          <button
            className={styles.cardButtons}
            onClick={handleAddCart}
            onMouseEnter={handleCartMouseEnter}
            onMouseLeave={handleCartMouseLeave}
          >
            {isCartHovered ? (
              <ShoppingCartIcon titleAccess="Agregar al carrito" />
            ) : (
              <ShoppingCartOutlinedIcon titleAccess="Agregar al carrito" />
            )}
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
          {name}
        </h6>
      </div>
    </div>
  );
};

export default Cards;
