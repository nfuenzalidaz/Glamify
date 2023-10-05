import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../Redux/Features/cartSlice.js";
import styles from "./PopUpFail.module.css";

function PopUpCart() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/home");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.thanks}>
        <h1 className={styles.h1}>OCURRIO UN PROBLEMA</h1>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.errormsg}>OCURRIO UN PROBLEMA MIENTRAS SE PROCESABA EL PAGO</p>
        <button className={styles.button} onClick={handleAccept}>
          ACEPTAR
        </button>
      </div>
    </div>
  );
}

export default PopUpCart;