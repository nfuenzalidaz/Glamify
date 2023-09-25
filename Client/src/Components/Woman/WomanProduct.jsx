import { useSelector } from "react-redux";
import CardList from "../CardList/CardList";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../Hooks/usePagination";
import Searchbar from "../Searchbar/Searchbar";
import NavBar from "../NavBar/NavBar";

const WomanProduct = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  const womanProduct = allProducts.filter(
    (product) => product.gender === "woman"
  );

  const { currentItems, currentPage, paginate, totalPages } =
    usePagination(womanProduct);

  return (
    <>
      <NavBar />
      <Searchbar />
      <CardList allProducts={currentItems} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </>
  );
};

export default WomanProduct;
