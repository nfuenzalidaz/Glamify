import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchProductsById } from '../../Redux/Features/productSlice';
import { addItemToCart } from '../../Redux/Features/cartSlice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './ProductDetail.module.css';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Review from "../Review/Review";

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

  const notify = () =>
    toast.success('Producto agregado al carrito exitosamente!', {
      position: 'bottom-center',
    });
//////////
  const [reviews, setReviews] = useState([]);
  const handleReviewSave = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
    toast.success("Revisión guardada exitosamente!", {
      position: "bottom-center",
    });
  };
///////////
  const handleAdd = () => {
    const { name, price, stock, image, description } = products;
    dispatch(addItemToCart({ id, name, price, stock, image, description }));
    notify();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.goBackContainer}>
        <Link to='/home' className={styles.linkBack}>
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
            <button className={styles.buttonFav}>GUARDAR EN FAVORITOS</button>
          </div>
          <p>DESCRIPCION: {products.description}</p>
          <p>CATEGORIA: {products.category}</p>
          <p>PRECIO: $ {products.price}</p>
          <p>STOCK: {products.stock}</p>
        </div>
      <Review ProductId={id} onSave={handleReviewSave} className={styles.DetailsTextTwo} />
      <div className={styles.DetailsTextTwo}>
        <h3>Comentarios:</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div>Rating: {review.rating}</div>
              <div>Comment: {review.comment}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '2px solid #000000',
            padding: '10px',
            color: '#ffffff',
            background: '#000000',
          },
        }}
      />

    </div>
  );
};

export default ProductDetail;