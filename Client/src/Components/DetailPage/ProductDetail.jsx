import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchProductsById } from "../../Redux/Features/productSlice";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.product.productDetail);

  useEffect(() => {
    dispatch(searchProductsById(id));
  }, [dispatch, id]);

  if (!products) {
    return <h2>No existe ese producto</h2>;
  }

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
            <button className={styles.buttonCart}>AÑADIR AL CARRITO</button>
            <button className={styles.buttonFav}>GUARDAR EN FAVORITOS</button>
          </div>
          <p>DESCRIPCION: {products.description}</p>
          <p>CATEGORIA: {products.category}</p>
          <p>PRECIO: $ {products.price}</p>
          <p>STOCK: {products.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
