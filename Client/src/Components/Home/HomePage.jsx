import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import CardList from '../CardList/CardList';
import Searchbar from "../searchbar/searchbar";

const Home = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  const itemsPerPage = 6; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Searchbar/>
      <CardList allProducts={currentProducts} section='home' />
      <Pagination totalPages={Math.ceil(allProducts.length / itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
