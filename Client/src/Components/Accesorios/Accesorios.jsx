import { useSelector } from "react-redux";
import CardList from "../CardList/CardList";
import Searchbar from "../searchbar/searchbar";

const Accesorios = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  return (
    <>
      <Searchbar />
      <CardList allProducts={allProducts} section="accesory" />
    </>
  );
};

export default Accesorios;
