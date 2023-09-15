import { useSelector } from "react-redux";
import CardList from "../CardList/CardList";
import Searchbar from "../searchbar/searchbar";

const Hombres = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  return (
    <>
      <Searchbar />
      <CardList allProducts={allProducts} section="man" />
    </>
  );
};

export default Hombres;
