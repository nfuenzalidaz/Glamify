import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchProductsById } from "../../Redux/Features/productSlice";
import { addItemToCart } from "../../Redux/Features/cartSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchFavoritesByUser } from "../../Redux/Features/favoriteSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorite.favorites);
  const { id } = useParams();
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  // Obtener el ID de usuario del objeto user
  const userId = isAuthenticated ? user.sub : null;

  useEffect(() => {
    dispatch(searchProductsById(id));
  }, [dispatch]);

  const products = useSelector((state) => state.product.productDetail);
  if (!products) {
    return <h2>No existe ese producto</h2>;
  }

  const notify = (message) =>
    toast.success(message, {
      position: "bottom-center",
    });

  const handleAdd = () => {
    const { name, price, stock, image, description } = products;
    dispatch(addItemToCart({ id, name, price, stock, image, description }));
    notify("Producto agregado al carrito exitosamente!");
  };

  const handleAddFavorite = () => {
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

    axios
      .post("/favorites", {
        userId: userId,
        ProductId: id,
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(fetchFavoritesByUser(userId));
          notify("Producto agregado a favoritos exitosamente!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoBack = () => {
    navigate(-1);
  }

  const resetDetails = () => {
    dispatch(resetDetails());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.goBackContainer}>
        <button className={styles.linkBack} onClick={handleGoBack}>
          <ArrowBackIosIcon className={styles.backIcon} />
        </button>
      </div>
      <div className={styles.ImageContainer}>
        <img
          className={styles.imageSize}
          src={products.image}
          alt={products.image}
        />
      </div>
      <div className={styles.DetailsText}>
        <h3 className={styles.nameStyle}>{products.name}</h3>
        <div className={styles.DetailsTextTwo}>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonCart} onClick={handleAdd}>
              AÑADIR AL CARRITO
            </button>
            <button
              className={styles.buttonFav}
              onClick={handleAddFavorite}
              disabled={favorites.some(
                (favorite) => favorite.Product.id === id
              )}
            >
              GUARDAR EN FAVORITOS
            </button>
          </div>
          <p>DESCRIPCION: {products.description}</p>
          <p>CATEGORIA: {products.category}</p>
          <p>PRECIO: $ {products.price}</p>
          <p>STOCK: {products.stock}</p>
        </div>
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

export default ProductDetail;
