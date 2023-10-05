import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPurchases } from "../../../Redux/Features/purchaseSlice";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

const Purchase = () => {
  const dispatch = useDispatch();
  const allPurchases = useSelector((state) => state.purchases.allPurchases);
  const loading = useSelector((state) => state.purchases.loading);

  useEffect(() => {
    dispatch(fetchAllPurchases());
  }, [dispatch]);

  return (
    <div>
      <AdminNavBar />
      <h2>HISTORIAL DE VENTAS</h2>
      {loading ? (
        <p>CARGANDO...</p>
      ) : (
        <ul>
          {allPurchases.map((purchase) => (
            <li key={purchase.id}>
              <p>Usuario: {purchase.userId}</p>
              <p>Fecha: {purchase.createdAt}</p>
              <p>Total: ${purchase.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Purchase; 