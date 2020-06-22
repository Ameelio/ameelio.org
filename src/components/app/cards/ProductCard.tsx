import React, { FunctionComponent } from "react";
import Image from "react-bootstrap/Image";
import "./ProductCard.css";

interface ProductProps {
  name: string;
  description: string;
  image: string;
  cta: string;
  ctaLink?: string;
  learnMoreLink?: string;
}

const ProductCard: FunctionComponent<ProductProps> = ({
  name,
  image,
  description,
  cta,
  ctaLink,
  learnMoreLink,
}) => {
  return (
    <div className="products-card-wrapper ml-lg-5">
      <div className="products-card-title">{name}</div>
      <Image
        src={image}
        className="product-card-illustration mb-3"
        alt="Product picture"
      />
      <div className="products-card-body my-3">{description}</div>
      {ctaLink && (
        <button
          onClick={() => window.open(ctaLink)}
          className="products-signup-button"
        >
          {cta}
        </button>
      )}
      {learnMoreLink && (
        <a className="learn-more" href={learnMoreLink}>
          Learn More
        </a>
      )}
    </div>
  );
};

export default ProductCard;
