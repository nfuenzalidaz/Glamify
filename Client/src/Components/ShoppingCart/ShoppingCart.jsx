import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} from '../../Redux/Features/cartSlice';
import styles from './ShoppingCart.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Toaster, toast } from 'react-hot-toast';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const cart = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useAuth0();

  const notifyUser = () =>
    toast.error('Debe iniciar sesion para comprar', {
      position: 'bottom-center',
    });

  const notifyCart = () =>
    toast.error('Debe agregar al menos un producto al carrito', {
      position: 'bottom-center',
    });

  const handlePay = () => {
    event.preventDefault();

    if (cartItems.length === 0) {
      return;
    }
    if (user && cart) {
      try {
        const response = axios
          .post('/payment/create-order', { user, cart })
          .then((res) => (window.location.href = res.data.init_point));
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!user) notifyUser();
      if (!cart) notifyCart();
    }
  };

  return (
    <div className={styles.items}>
      <div className={styles.flushIcon}>
        <button
          className={styles.buttomEmpty}
          onClick={() => dispatch(clearCart())}
        >
          <DeleteForeverIcon />
        </button>
      </div>
      {cartItems.map((item) => (
        <div className={styles.idKey} key={item.id}>
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
        <button
          className={styles.buttonPay}
          onClick={handlePay}
          disabled={cartItems.length === 0}
        >
          PAGAR
        </button>
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

export default ShoppingCart;
