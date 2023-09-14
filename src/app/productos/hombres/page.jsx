"use client";

import ProductsCard from "@/src/components/productsCard/ProductsCard";
import { useSelector } from "react-redux";

const HombresPage = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <section className="cardContainer">
      <h1>Hombres</h1>
      <ProductsCard products={products} categories="hombre"/>
    </section>
  );
};

export default HombresPage;
