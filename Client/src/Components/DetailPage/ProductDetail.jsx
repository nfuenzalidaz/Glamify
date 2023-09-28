import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchProductsById } from "../../Redux/Features/productSlice";
import { addItemToCart } from "../../Redux/Features/cartSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { createFavorites } from "../../Redux/Features/favoriteSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const favorites = useSelector((state) => state.favorite.favorites);
  const products = useSelector((state) => state.product.productDetail);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(searchProductsById(id));
    setIsFavorite(favorites.some((favorite) => favorite.Product.id === id));
  }, [dispatch, id, favorites]);

  if (!products) {
    return <h2>No existe ese producto</h2>;
  }

  const notify = () =>
    toast.success("Producto agregado al carrito exitosamente!", {
      position: "bottom-center",
    });

  const handleAdd = () => {
    const { name, price, stock, image, description } = products;
    dispatch(addItemToCart({ id, name, price, stock, image, description }));
    notify();
  };

  const handleAddFavorite = () => {
    dispatch(
      createFavorites({
        UserId: "6c8d6002-c550-48bd-9fe8-cc8b5321e3be",
        ProductId: id,
      })
    );
    setIsFavorite(true);
    toast.success("Producto agregado a favoritos exitosamente!", {
      position: "bottom-center",
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.goBackContainer}>
        <Link to="/home" className={styles.linkBack}>
          <ArrowBackIosIcon className={styles.backIcon} />
        </Link>
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
              disabled={isFavorite}
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
