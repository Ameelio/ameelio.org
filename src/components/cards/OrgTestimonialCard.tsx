import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";
import "./OrgTestimonialCard.css";
interface Props {
  testimonial: OrgTestimonial;
}

export default function OrgTestimonialCard({
  testimonial,
}: Props): ReactElement {
  return (
    <div className="d-flex flex-column flex-md-row org-testimonial-card">
      <Image src={testimonial.image} />
      <div className="d-flex flex-column p-3 mx-1">
        <span className="font-weight-bold p3">
          {testimonial.name}, <i>{testimonial.org}</i>
        </span>
        <span className="mt-3">{testimonial.testimonial}</span>
      </div>
    </div>
  );
}
