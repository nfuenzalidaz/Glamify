import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import CardList from "../CardList/CardList";
import Searchbar from "../Searchbar/Searchbar";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import styles from "./HomePage.module.css";
import usePagination from "../../Hooks/usePagination";
import { resetDetails } from "../../Redux/Features/productSlice";
import { useSearchParams } from "react-router-dom";
import PopUpCart from "../PopUp/PopUpCart";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDetails());
  }, []);

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
        <div className={styles.searchNavContainer}>
          <div className={styles.navBar}>
            <NavBar />
          </div>
        </div>
          <div className={styles.searchBar}>
            <Searchbar />
          </div>
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
