import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import CardList from "../CardList/CardList";
import Searchbar from "../Searchbar/Searchbar";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import styles from "./AccesoryProduct.module.css";
import usePagination from "../../Hooks/usePagination";

const AccesoriesProducts = () => {
  const allProducts = useSelector((state) => state.product.allProducts);

  const filteredProducts = allProducts.filter(product => product.category === 'accesorio');

  const { totalPages, currentItems, paginate, currentPage } =
    usePagination(filteredProducts);

  return (
    <div className={styles.container}>
      <NavBar />
      <Searchbar />
      <Filters />
      <CardList allProducts={currentItems} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </div>
  );
};

export default AccesoriesProducts;
