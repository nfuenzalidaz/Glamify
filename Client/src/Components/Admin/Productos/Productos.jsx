import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import CardList from '../CardList/CardList';
import Pagination from '../../Pagination/Pagination';
import Filters from '../../Filters/Filters';
import usePagination from '../../../Hooks/usePagination';
import NavBar from '../NavBar/NavBar';

const productos = () => {
	const allProducts = useSelector((state) => state.product.allProducts);

	const { totalPages, currentItems, paginate, currentPage } =
		usePagination(allProducts);
	return (
		<div>
			<NavBar />
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

export default productos;
