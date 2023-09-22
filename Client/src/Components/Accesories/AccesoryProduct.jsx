import { useSelector } from "react-redux";
import CardList from "../CardList/CardList";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import Searchbar from "../searchbar/searchbar";
import NavBar from "../NavBar/NavBar";

const AccesoryProduct = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  const accesoryProduct = allProducts.filter(
    (product) => product.gender === "accesory"
  );

  const { currentItems, currentPage, paginate, totalPages } =
    usePagination(accesoryProduct);

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

export default AccesoryProduct;
