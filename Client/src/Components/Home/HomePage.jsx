import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import CardList from "../CardList/CardList";
import Searchbar from "../Searchbar/Searchbar";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import styles from "./HomePage.module.css";
import usePagination from "../../Hooks/usePagination";
import { useSearchParams } from "react-router-dom";
import PopUpCart from "../PopUp/PopUpCart";

const Home = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  const { totalPages, currentItems, paginate, currentPage } =
    usePagination(allProducts);

  const popUp = searchParams.get("status");

  if (popUp === "approved") {
    return (
      <div>
        <PopUpCart />
      </div>
    );
  } else {
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
  }
};

export default Home;
