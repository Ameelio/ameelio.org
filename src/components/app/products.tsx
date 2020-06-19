import React from "react";
import "./stylesheets/products.css";

const Products: React.FC = () => {
  return (
    <div className="products-wrapper">
      <div className="products-title">Our Products</div>
      <div className="products-container flex-lg-row">
        <div className="products-card-wrapper">
          <div className="products-card-title">Letters for Families</div>
          <div className="products-card-body">
            Send free letters &amp; photos to your incarcerated loved ones. We
            service all correctional and immigrant detention facilities in the
            United States.
          </div>
          <button className="products-signup-button">Sign Up</button>
          <a className="learn-more" href="#">
            Learn More
          </a>
        </div>
        <div className="products-card-wrapper">
          <div className="products-card-title">Letters for Organizations</div>
          <div className="products-card-body">
            Your electronic courier is here. We'll handle your bulk mail,
            organize your contacts, and ease collaboration and visibility within
            your organization.
          </div>
          <button className="products-signup-button">Sign Up</button>
          <a className="learn-more" href="#">
            Learn More
          </a>
        </div>
        {/* <div className="products-card-wrapper">
          <div className="products-card-title">Connect Videoconferencing</div>
          <div className="products-card-body">
            The next-generation platform for prison videoconferencing. Secure
            and reliable for correctional facilities. Free and easy for the
            incarcerated and their loved ones.
          </div>
          <button className="products-signup-button">Sign Up</button>
          <a className="learn-more" href="#">
            Learn More
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
