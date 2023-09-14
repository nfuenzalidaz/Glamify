"use client"

import ProductsCard from "@/src/components/productsCard/ProductsCard";
import { useSelector } from "react-redux";

const AcessoriosPage = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <section className="cardContainer">
      <h1>Accesorios</h1>
      <ProductsCard products={products} categories="accesorios" />
    </section>
  );
};

export default AcessoriosPage;
