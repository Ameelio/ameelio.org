import React, { FunctionComponent } from "react";
import ProductCard from "../cards/ProductCard";
import "./ProductList.css";

interface ProductListProps {
  products: Array<{
    name: string;
    image: string;
    description: string;
    cta: string;
    ctaLink: string;
  }>;
}
const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
  return (
    <div className="products-container flex-lg-row align-items-center">
      {products.map(function (product, index) {
        return (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            cta={product.cta}
            ctaLink={product.ctaLink}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
