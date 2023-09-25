import { useSelector } from "react-redux";
import CardList from "../CardList/CardList";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../Hooks/usePagination";
import NavBar from "../NavBar/NavBar";
import Searchbar from "../Searchbar/Searchbar";

const ManProduct = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  const manProducts = allProducts.filter((product) => product.gender === "man");

  const { currentItems, currentPage, paginate, totalPages } =
    usePagination(manProducts);

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

export default ManProduct;
