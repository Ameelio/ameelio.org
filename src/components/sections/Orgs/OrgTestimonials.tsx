import React, { ReactElement } from "react";
import { ORGS_TESTIMONIALS } from "src/utils/constants";
import OrgTestimonialCard from "src/components/cards/OrgTestimonialCard";
import { Carousel } from "react-bootstrap";

export default function OrgTestimonials(): ReactElement {
  return (
    <div className="d-flex flex-column align-items-center py-5">
      <h2 className="font-weight-bold dark mb-5">Hear From Our Users</h2>
      <Carousel>
        {ORGS_TESTIMONIALS.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <OrgTestimonialCard testimonial={testimonial} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
