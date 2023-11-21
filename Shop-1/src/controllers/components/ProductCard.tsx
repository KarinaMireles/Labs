// components/ProductCard.tsx

import React from "react";
import { Product } from "../models/Product";
import "./ProductCard.css";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <img
        src={product.photoURL || "/images/coming-soon.jpg"}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
