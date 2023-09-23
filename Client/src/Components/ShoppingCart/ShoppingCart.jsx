import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../../Redux/Features/cartSlice';
import styles from './ShoppingCart.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <div>
        <Link to='/home' className={styles.link}>
          <ArrowBackIosIcon />
        </Link>
      </div>
      <h1>CARRITO DE COMPRAS</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img className={styles.Image} src={item.image} alt={item.name} />
          <div className={styles.textContainer}>
            <h3>{item.name}</h3>
            <h3>$ {item.price}</h3>
            <h3>STOCK: {item.stock}</h3>
            <div>
              <button onClick={() => dispatch(removeItemFromCart(item.id))}>
                ELIMINAR
              </button>
              <button onClick={() => dispatch(decreaseItemQuantity(item.id))}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseItemQuantity(item.id))}>
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2>TOTAL: $ {calculateTotal()}</h2>
    </div>
  );
};

export default ShoppingCart;
