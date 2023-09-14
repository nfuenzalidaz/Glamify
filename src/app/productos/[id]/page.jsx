"use client";

import { getProductById } from "@/src/redux/actions/producsActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ({ params }) => {
  const router = useRouter();
  const products = useSelector((state) => state.products.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  return (
    <section>
      <h1>Detail</h1>
      <button onClick={() => router.back()}>
        volver
      </button>
      <img src={products.image} alt={products.name} width={200} height={200} />
      <div>
        <h2>{products.name}</h2>
        <h2>Precio: $ {products.price}</h2>
        <p>{products.description}</p>
      </div>
    </section>
  );
};

export default ProductDetail;
