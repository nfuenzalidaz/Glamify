"use client";

import ProductsCard from "@/src/components/productsCard/ProductsCard";
import { useSelector } from "react-redux";

const MujeresPage = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <section className="cardContainer">
      <h1>Mujeres</h1>
      <ProductsCard products={products} categories="mujer" />
    </section>
  );
};

export default MujeresPage;
