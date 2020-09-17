import React, { ReactElement } from "react";
import ProductCard from "src/components/cards/ProductCard";
import "./ProductList.css";

interface Props {
  products: Array<{
    name: string;
    image: string;
    description: string;
    cta: string;
    ctaLink: string;
  }>;
}
export default function ProductList({ products }: Props): ReactElement {
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
}
