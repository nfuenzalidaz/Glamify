"use client";

import ProductsCard from "@/src/components/productsCard/ProductsCard";
import { getAllProducts } from "@/src/redux/actions/producsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <section className="cardContainer">
      <ProductsCard products={products} />
    </section>
  );
};

export default HomePage;
