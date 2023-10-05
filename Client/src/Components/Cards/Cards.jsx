import { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Redux/Features/cartSlice";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { deleteFavorite, fetchFavoritesByUser } from "../../Redux/Features/favoriteSlice";
import { useAuth0 } from "@auth0/auth0-react";

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
  const favorites = useSelector((state) => state.favorite.favorites);
  const items = useSelector((state) => state.product.allProducts)
  const cart = useSelector((state) => state.cart.cart)
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const navigate = useNavigate();

  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  // Obtener el ID de usuario del objeto user
  const userId = isAuthenticated ? user.sub : null;

  const [isFavorite, setIsFavorite] = useLocalStorage(`favorite_${id}`, false);

  // Verificar si el producto está en favoritos al cargar el componente
  const isProductInFavorites = favorites.some((fav) => fav.ProductId === id);

  useEffect(() => {
    setIsFavorite(isProductInFavorites);
  }, [isProductInFavorites]);

  const notifyErrorStock = () =>
  toast.error('Ha seleccionado el maximo de productos en stock', {
    position: 'bottom-center',
  });

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

  const addToCart = () => {
    const checkStock = items.find((item) => item.id === id);
    let checkCart = cart.find((item) => item.id === id);
    if ((!checkCart && checkStock.stock === 0) || (checkCart?.quantity === checkStock.stock)) return notifyErrorStock();
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
    if (!isAuthenticated) {
      toast.error("Debes iniciar sesión para agregar a favoritos", {
        position: "bottom-center",
      });
      setTimeout(() => {
        navigate("/login");
        loginWithRedirect();
      }, 2500);
      return;
    }

    if (isProductInFavorites) {
      handleDeleteFavorites();
      setIsFavorite(false);
    } else {
      axios
        .post("/favorites", {
          userId: userId,
          ProductId: id,
        })
        .then((response) => {
          if (response.status === 201) {
            setIsFavorite(true);
            dispatch(fetchFavoritesByUser(userId));
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
            onClick={addToCart}
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
          {name.toUpperCase()}
        </h6>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "2px solid #000000",
            padding: "10px",
            color: "#ffffff",
            background: "#000000",
          },
        }}
      />
    </div>
  );
};

export default Cards;
