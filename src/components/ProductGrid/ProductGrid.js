import React from "react";
import { ProductPod } from "../ProductPod/ProductPod";
import "./ProductGrid.scss";

export const ProductGrid = ({ products, selectHandler }) => {
  if (!products?.length) return null;

  return (
    <article className="product-grid">
      {products.map((item) => (
        <ProductPod product = {item} selectHandler={selectHandler} />
      ))}
    </article>
  );
};
