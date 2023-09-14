"use client";
import styles from "./ProductsCard.module.css";
import Link from "next/link";

const ProductsCard = ({ products, categories }) => {
  const productsByCategory = categories
    ? products.filter((product) => product.category.toLowerCase() === categories)
    : products;

  return (
    <>
      {productsByCategory?.map((product) => (
        <article className={styles.container} key={product.id}>
            <div className={styles.price}>
              <p>$ {product.price}</p>
            </div>
          <div className={styles.containerCard}>
            <img src={product.image} alt="" width={200} height={200} />
            <div className={styles.infoProduct}>
              <Link href={`/productos/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.description}</p>
              <span>{product.category}</span>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProductsCard;
