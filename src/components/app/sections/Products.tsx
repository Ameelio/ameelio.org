import React from "react";
import "./Products.css";
import ProductList from "../products/ProductList";

const Products: React.FC = () => {
  const PRODUCTS = [
    {
      name: "Letters for Families",
      image: require("../../../assets/products/letters.svg"),
      description:
        "Send free letters &amp; photos to your incarcerated loved ones. We service all correctional and immigrant detention facilities in the United States.",
      cta: "Sign Up",
      ctaLink: "https://letters.ameelio.org/register",
    },
    {
      name: "Letters for Organizations",
      image: require("../../../assets/products/trends.svg"),
      description:
        "Your electronic courier is here. We'll handle your bulk mail, organize your contacts, and ease collaboration and visibility within your organization.",
      cta: "Request Demo",
      ctaLink:
        "https://calendly.com/emma-gray-ameelio/letters-for-organizations-information-session",
    },
    {
      name: "Contacts for Organizations",
      image: require("../../../assets/products/trends.svg"),
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
      image: require("../../../assets/products/connect.svg"),
      description:
        "Our north star. We’re building a secure platform to connect incarcerated people with their loved ones, their lawyers, and remote telehealth, educational, and religious services – all for free.",
      cta: "Request Demo",
      ctaLink: "https://calendly.com/ameelio",
    },
  ];
  return (
    <div>
      <div className="products-wrapper w-100 pt-5">
        <span className="products-title p2">What we're doing</span>
        <ProductList products={PRODUCTS} />
      </div>
      <div className="bg-darkblue py-5">
        <span className="products-title p2 white font-weight-bold">
          Where we're going
        </span>
        <ProductList products={FUTURE_PRODUCTS} />
      </div>
    </div>
  );
};

export default Products;
