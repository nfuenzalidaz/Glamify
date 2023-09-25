import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} from '../../Redux/Features/cartSlice';
import styles from './ShoppingCart.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const cart = useSelector((state) => state.cart);

  const handlePay = () => {
    event.preventDefault();

    if (cartItems.length === 0) {

    }

    const response = axios.post('/payment/create-order', cart).then((res) => {
      window.location.href = res.data.init_point;
    });
  };

  return (
    <div className={styles.items}>
      <div className={styles.flushIcon}>
      <button className={styles.buttomEmpty}onClick={() => dispatch(clearCart())}><DeleteForeverIcon/></button>
      </div>
      {cartItems.map((item) => (
        <div className={styles.idKey} key={item.id} >
          <div className={styles.ShoppingCartMain}>
          <img className={styles.Image} src={item.image} alt={item.name} />
          <div className={styles.buttonsContainer}>
            <button
              className={styles.deleteButtom}
              onClick={() => dispatch(removeItemFromCart(item.id))}
            >
              <DeleteOutlineIcon />
            </button>
            <button
              className={styles.decre}
              onClick={() => dispatch(decreaseItemQuantity(item.id))}
            >
              -
            </button>
            <span className={styles.quantity}>{item.quantity}</span>
            <button
              className={styles.incre}
              onClick={() => dispatch(increaseItemQuantity(item.id))}
            >
              +
            </button>
          </div>
          </div>
          <div className={styles.textContainer}>
            <h3>{item.name}</h3>
            <h3>PRECIO : $ {item.price}</h3>
            <h3>STOCK: {item.stock}</h3>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <h2>TOTAL ${cart.totalPrice}</h2>
      <button className={styles.buttonPay}onClick={handlePay}>PAGAR</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
