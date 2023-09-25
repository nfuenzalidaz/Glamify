import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import CardList from "../CardList/CardList";
import Searchbar from "../searchbar/searchbar";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import styles from "./AccesoryProduct.module.css";
import usePagination from "../../hooks/usePagination";

const Home = () => {
  const allProducts = useSelector((state) => state.product.allProducts);

  const { totalPages, currentItems, paginate, currentPage } =
    usePagination(allProducts);

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

export default Home;
