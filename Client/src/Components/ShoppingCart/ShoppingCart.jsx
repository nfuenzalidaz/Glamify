import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../../Redux/Features/cartSlice';
import styles from './ShoppingCart.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
      <div className={styles.items}>
      {cartItems.map((item) => (
        <div className= {styles.idKey}key={item.id}>
          <div className={styles.ShoppingCartMain}>
          <img className={styles.Image} src={item.image} alt={item.name} />
            <div className={styles.buttonsContainer}>
              <button className={styles.deleteButtom}onClick={() => dispatch(removeItemFromCart(item.id))}>
              <DeleteOutlineIcon/>
              </button>
              <button className={styles.decre} onClick={() => dispatch(decreaseItemQuantity(item.id))}>
                -
              </button>
              <span>{item.quantity}</span>
              <button className={styles.incre} onClick={() => dispatch(increaseItemQuantity(item.id))}>
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
      <h2>TOTAL: $ {calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
