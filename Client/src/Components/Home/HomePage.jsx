import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import Pagination from '../Pagination/Pagination';
import CardList from '../CardList/CardList';

const Home = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  // const itemsPerPage = 8; // Número de elementos por página
  // const [currentPage, setCurrentPage] = useState(1); // Página actual

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {/* <Pagination totalPages={Math.ceil(allProducts.length / itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} /> */}
      <CardList allProducts={allProducts} />
    </div>
  );
};

export default Home;
