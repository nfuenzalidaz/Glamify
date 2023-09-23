import { useState } from "react";

// Custom hook para la paginación
const usePagination = (data, itemsPerPage = 6, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    totalPages: Math.ceil(data.length / itemsPerPage),
    currentItems,
    paginate,
  };
};

export default usePagination;
