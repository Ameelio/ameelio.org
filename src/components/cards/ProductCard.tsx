import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";
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
    <div className="products-card-wrapper ml-lg-3 mr-lg-3 py-5">
      <div className="products-card-title mb-3">{name}</div>
      <Image
        src={image}
        className="product-card-illustration mb-3"
        alt="Product picture"
      />
      <div className="products-card-body mt-auto">{description}</div>
      {ctaLink && (
        <Button
          onClick={() => window.open(ctaLink)}
          size="lg"
          className="mt-auto mb-3"
        >
          {cta}
        </Button>
      )}
      {learnMoreLink && (
        <a className="learn-more mb-5" href={learnMoreLink}>
          Learn More
        </a>
      )}
    </div>
  );
};

export default ProductCard;
