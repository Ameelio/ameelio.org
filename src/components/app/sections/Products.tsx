import React from "react";
import "./Products.css";
import ProductCard from "../cards/ProductCard";

const Products: React.FC = () => {
  const PRODUCTS = [
    {
      name: "Letters for Families",
      img: require("../../../assets/products/letters.svg"),
      description:
        "Send free letters &amp; photos to your incarcerated loved ones. We service all correctional and immigrant detention facilities in the United States.",
      cta: "Sign Up",
      ctaLink: "https://letters.ameelio.org/register",
    },
    {
      name: "Letters for Organizations",
      img: require("../../../assets/products/trends.svg"),
      description:
        "Your electronic courier is here. We'll handle your bulk mail, organize your contacts, and ease collaboration and visibility within your organization.",
      cta: "Request Demo",
      ctaLink:
        "https://calendly.com/emma-gray-ameelio/letters-for-organizations-information-session",
    },
    {
      name: "Contacts for Organizations",
      img: require("../../../assets/products/trends.svg"),
      description:
        "Co-marketing campaigns to connect providers with those who need their services most.  We help reentry organizations find and reach well-matched inviduals nearing release.",
      cta: "Request Demo",
      ctaLink:
        "https://calendly.com/emma-gray-ameelio/letters-for-organizations-information-session?month=2020-06",
    },
  ];

  const FUTURE_PRODUCTS = [
    {
      name: "Connect Videoconferencing",
      img: require("../../../assets/products/connect.svg"),
      description:
        "Our north star is free video conferencing, the closest substitute for in-person contact. We’re building a secure platform to connect incarcerated people with their loved ones, their lawyers, and remote telehealth, educational, and religious services – all for free.",
      cta: "Request Demo",
      ctaLink:
        "https://calendly.com/emma-gray-ameelio/letters-for-organizations-information-session?month=2020-06",
    },
  ];
  return (
    <div className="py-5">
      <div className="products-wrapper w-100">
        <span className="products-title p2">What we're doing</span>
        <div className="products-container flex-lg-row align-items-center">
          {PRODUCTS.map(function (product, index) {
            return (
              <ProductCard
                key={index}
                name={product.name}
                image={product.img}
                description={product.description}
                cta={product.cta}
                ctaLink={product.ctaLink}
              />
            );
          })}
          {/* </div> */}
        </div>
      </div>
      <div>
        <span className="products-title p2">Where we're going</span>
        <div className="products-container flex-lg-row align-items-center">
          {FUTURE_PRODUCTS.map(function (product, index) {
            return (
              <ProductCard
                key={index}
                name={product.name}
                image={product.img}
                description={product.description}
                cta={product.cta}
                ctaLink={product.ctaLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
